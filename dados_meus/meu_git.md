Owner avatar
geranf
Public
gaab0418/geranf
Go to file
t
Name		
gaab0418
gaab0418
Update README.md
9b33aee
 · 
3 months ago
GERANF.prw
Update
3 months ago
LICENSE
Initial commit
4 months ago
README.md
Update README.md
3 months ago
Repository files navigation
README
Apache-2.0 license
WSGERANF - WebService para Geração de Notas Fiscais
Descrição
WebService REST desenvolvido em AdvPL para o sistema Protheus que automatiza a geração de Notas Fiscais eletrônicas (NFe) com suporte a pedidos normais e devolução de compras.

Endpoints
1. GET / - Home
Descrição: Retorna informações da versão da API e dados de produção
Método: GET
URL: /
Resposta: JSON com informações da versão e data/hora
2. POST /GERANF - Geração de NF
Descrição: Gera uma nova Nota Fiscal eletrônica
Método: POST
URL: /GERANF
Content-Type: application/json
Campos obrigatórios:
{
  "codigo_fornecedor": "string",    // Código do cliente/fornecedor
  "loja": "string",                 // Loja do cliente/fornecedor
  "codigo_transportadora": "string", // Código da transportadora
  "numero_nf_devolvida": "string",  // Número da NF para devolução (opcional)
  "condicao_pagamento": "string",   // Condição de pagamento
  "numero_solicitacao": "string",   // Número da solicitação
  "solicitante": "string",          // Nome do solicitante
  "tipo_volume": "string",          // Tipo do volume
  "quantidade_volume": "number",    // Quantidade de volumes
  "peso_kg": "number",              // Peso em KG
  "tipo_pedido": "string",          // Tipo do pedido (N=Normal, D=Devolução, U=Fornecedor)
  "produtos": [
    {
      "codigo_produto": "string",    // Código do produto
      "quantidade_produto": "number", // Quantidade
      "valor_produto": "number",     // Valor unitário
      "almoxarifado": "string",      // Código do almoxarifado
      "item": "string",              // Item da NF original (para devolução)
      "tes": "string"                // Código do TES
    }
  ]
}
Campos opcionais:
codcliente: Alternativa ao codigo_fornecedor
cod_rv: Código da unidade destino ou pedido de compra
observacao: Observações adicionais
codigo_destino: Código de destino do produto
Resposta de sucesso:
{
  "pedido": "string",              // Número do pedido gerado
  "nf": "string",                  // Número da NF
  "serie": "string",               // Série da NF
  "chave": "string",               // Chave de acesso da NFe
  "arquivo_pdf": "string",         // Caminho do arquivo PDF
  "arquivo": "string",             // Arquivo PDF em base64
  "error": ""                      // Vazio em caso de sucesso
}
Resposta de erro:
{
  "status": "Erro",
  "error": "string",               // Descrição do erro
  "pedido": "",
  "nf": "",
  "serie": "",
  "chave": "",
  "arquivo_pdf": "",
  "arquivo": ""
}
Funcionalidades
Processo de Geração Normal:
Validação: Verificação dos dados de entrada e campos obrigatórios
Criação do Pedido: Geração automática do pedido de venda/compra
Liberação: Liberação automática do pedido para faturamento
Geração NFe: Criação do documento de saída
Transmissão SEFAZ: Envio para aprovação na SEFAZ
Monitoramento: Verificação do status até aprovação
Geração DANFE: Criação do arquivo PDF
Retorno: Arquivo PDF codificado em base64
Processo de Devolução:
Validação: Verificação da NF original e fornecedor
Localização: Busca da NF original no sistema
Criação Pedido: Geração do pedido de devolução
Processo NFe: Mesmo fluxo da geração normal
Vinculação: Ligação com a NF original através do B6_IDENT
Parâmetros do Sistema
Parâmetro	Descrição	Padrão
XX_GNFS036	Pasta para arquivos DANFE	"WSGERANF\gera_nf\danfe"
XX_GNFS037	Pasta temporária	"WSGERANF\gera_nf\tmp"
XX_GNFS038	Tempo espera status NFe (ms)	1500
XX_GNFS039	Tentativas busca status	3
XX_GNFS03A	Códigos status SEFAZ válidos	"100/030/001/102"
XX_GNFSLOG	Ativa log detalhado	.F.
XX_INDSB6	Usa índice SB6 personalizado	.F.
MV_SPEDURL	URL do serviço TSS/SPED	-
MV_ESPECIE	Configuração séries NFe	-
Validações Implementadas
Campos Obrigatórios:
Código fornecedor OU código cliente
Todos os campos marcados como obrigatórios no array aCamposObrt
Produtos com códigos, quantidades e valores válidos
TES e almoxarifados existentes no cadastro
Cadastros:
Clientes/Fornecedores: Validação de existência e desbloqueio
Produtos: Verificação no cadastro SB1
TES: Validação no cadastro SF4
Condições de Pagamento: Verificação no SE4
Transportadoras: Validação se informado
SEFAZ:
Configuração TSS ativa
Ambiente, versão e modalidade configurados
Status de retorno dentro dos códigos válidos
Geração de chave de acesso
Tipos de Pedido Suportados
Tipo	Descrição	Observações
N	Normal (Cliente)	Venda padrão para cliente
D	Devolução de Compra	Retorno de mercadoria para fornecedor
U	Fornecedor	Pedido tipo "B" no sistema
Tratamento de Erros
Erros de Validação:
Campos obrigatórios não preenchidos
Cadastros inexistentes ou bloqueados
Dados inválidos ou inconsistentes
Erros de Processamento:
Falha na criação do pedido (com log detalhado)
Problemas na liberação do estoque
Erro na geração da NFe
Erros SEFAZ:
Falha na transmissão
Rejeição pela SEFAZ com código e mensagem
Timeout na consulta de status
Erros de Arquivo:
Problemas na geração do PDF
Falha na codificação base64
Problemas de acesso às pastas
Logs e Debugging
Console Logs:
Todas as operações são registradas com prefixo "GERA NF -" incluindo:

Início e fim de cada etapa
Números de pedidos e NFes gerados
Caminhos de arquivos criados
Erros detalhados com contexto
Log Detalhado (Parâmetro XX_GNFSLOG):
Quando ativado, grava logs completos usando a função U_kGeraCV8:

Dados de entrada (JSON sanitizado)
Dados de saída (com arquivo removido por segurança)
Timestamps de início e fim
Dependências
Sistema:
Protheus 12.1.25+ com módulos de faturamento
TSS (TOTVS Services SPED) configurado e ativo
Ambiente SEFAZ configurado (homologação/produção)
Cadastros Básicos:
Empresas e filiais configuradas
Clientes/Fornecedores cadastrados
Produtos com códigos corretos
TES de entrada e saída configurados
Condições de pagamento ativas
Transportadoras (se utilizado)
Funções Customizadas:
U_WSHOME(): Retorna dados básicos da API
U_kGeraCV8(): Função de log customizada
U_Console(): Função de log no console
U_DANFEProc(): Processamento customizado do DANFE
U_fPedDev(): Função para pedidos de devolução
Estrutura de Arquivos
\WSGERANF\
├── gera_nf\
│   ├── danfe\          # Arquivos PDF finais
│   └── tmp\            # Arquivos temporários
└── Logs\
    ├── Pedido\         # Logs de criação de pedidos
    └── Devolucao\      # Logs de devolução
Observações Técnicas
Integração:
Compatível com padrões REST
Retorno sempre em JSON













---------------------------------------------------------------------------------







Owner avatar
SpotDown
Public
gaab0418/SpotDown
Go to file
t
Name		
gaab0418
gaab0418
Update LICENSE.md
64fce1b
 · 
2 months ago
.gitignore
Initial commit
6 months ago
CODE_OF_CONDUCT.md
Update CODE_OF_CONDUCT.md
6 months ago
CONTRIBUTING.md
Create CONTRIBUTING.md
6 months ago
LICENSE.md
Update LICENSE.md
2 months ago
README.md
Update README.md
6 months ago
SECURITY.md
Rename SECURITY.md, to SECURITY.md
6 months ago
auth.py
Upload do projeto em si
6 months ago
config.py
Upload do projeto em si
6 months ago
database.py
Upload do projeto em si
6 months ago
download_queue.py
Upload do projeto em si
6 months ago
downloader.py
Upload do projeto em si
6 months ago
main.py
Upload do projeto em si
6 months ago
models.py
Upload do projeto em si
6 months ago
requirements.txt
Upload do projeto em si
6 months ago
Repository files navigation
README
Code of conduct
Contributing
License
Security
MIT License Educational Purpose Python 3.9+ FastAPI Contributions Welcome

Spotify Downloader API
⚠️ AVISO IMPORTANTE: Este projeto é destinado EXCLUSIVAMENTE para fins educacionais e de aprendizado sobre Python e desenvolvimento de APIs. NÃO deve ser usado para download de conteúdo protegido por direitos autorais.

Uma API RESTful para estudo de download de músicas e playlists do Spotify, utilizando FastAPI e processamento paralelo para gerenciar downloads simultâneos.

🎓 Propósito Educacional
Este projeto foi desenvolvido com o objetivo de:

Aprender e demonstrar conceitos de desenvolvimento de APIs com Python
Explorar o uso de bibliotecas e ferramentas modernas do ecossistema Python
Estudar padrões de arquitetura de software e boas práticas
Experimentar com processamento paralelo e gerenciamento de filas
Compreender sistemas de autenticação e autorização
⚖️ Responsabilidade Legal: O usuário é responsável por garantir que qualquer uso deste código esteja em conformidade com as leis locais e termos de serviço das plataformas utilizadas.

🛠️ Tecnologias e Ferramentas Utilizadas
Backend & Framework
FastAPI - Framework web moderno e rápido para Python
Uvicorn - Servidor ASGI para aplicações Python
Pydantic - Validação de dados e configurações
SQLAlchemy - ORM para Python
PyMySQL - Driver MySQL para Python
Autenticação & Segurança
python-jose - Implementação JWT para Python
passlib - Biblioteca para hash de senhas
bcrypt - Função de hash criptográfica
Integração de APIs
Spotipy - Biblioteca cliente para API do Spotify
requests - Biblioteca HTTP para Python
Processamento de Mídia
yt-dlp - Ferramenta para download de vídeos/áudios
FFmpeg - Processamento e conversão de áudio (requisito externo)
Utilitários
python-dotenv - Carregamento de variáveis de ambiente
python-multipart - Suporte para dados multipart/form-data
Banco de Dados
MySQL - Sistema de gerenciamento de banco de dados
Características
🎵 Sistema de estudo para download de faixas e playlists
👥 Sistema de usuários com autenticação JWT
🔄 Gerenciamento de fila de downloads com processamento paralelo
📊 Acompanhamento de progresso em tempo real
🧩 Extração automática de ID de URL do Spotify
🔍 Busca integrada no Spotify
🛡️ Sistema de permissões para usuários e administradores
Requisitos
Python 3.9+
MySQL
FFmpeg (para processamento de áudio)
Credenciais de API do Spotify (client_id e client_secret)
Instalação
Clone o repositório:

git clone https://github.com/gaab0418/SpotDown.git
cd spotify-downloader-api
Crie um ambiente virtual e ative-o:

python -m venv venv
source venv/bin/activate  # Linux/macOS
# ou
venv\Scripts\activate  # Windows
Instale as dependências:

pip install -r requirements.txt
Configure o arquivo .env na raiz do projeto:

# Configuração do MySQL
MYSQL_HOST=<host> # Exemplo: localhost
MYSQL_PORT=<porta> # Exemplo: 3306
MYSQL_USER=<usuario> # Exemplo: root
MYSQL_PASSWORD=<senha> # Exemplo: root
MYSQL_DATABASE=<banco_de_dados> # Exemplo: musicDb

# Configuração JWT
JWT_SECRET_KEY=<chave> # Exemplo: He4l0W0rld

# Configuração do Spotify
SPOTIFY_CLIENT_ID=<client_id> # Exemplo: 123456789abcd0123456789abcd
SPOTIFY_CLIENT_SECRET=<client_secret> # Exemplo: 123456789abcd0123456789abcd
SPOTIFY_REDIRECT_URI=<redirect_uri> # Exemplo: http://127.0.0.1:8888/callback

# Configuração da API
API_HOST=<host> # Exemplo: 0.0.0.0
API_PORT=<porta> # Exemplo: 8801

# Configuração de downloads
DOWNLOAD_PATH=<caminho> # Exemplo: ./arqvs/download
MAX_CONCURRENT_DOWNLOADS=<limite> # Exemplo: 10
Crie o banco de dados MySQL:

CREATE DATABASE musicDb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
Execute a aplicação:

python main.py
Primeiros Passos
Acesse a documentação Swagger da API em: http://localhost:8801/docs

Crie um usuário:

curl -X POST "http://localhost:8801/users/" \
  -H "Content-Type: application/json" \
  -d '{"username": "seunome", "email": "seu@email.com", "password": "suasenha"}'
Obtenha um token de acesso:

curl -X POST "http://localhost:8801/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=seunome&password=suasenha"
Configure suas credenciais do Spotify:

curl -X POST "http://localhost:8801/spotify/config" \
  -H "Authorization: Bearer seu_token" \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "seu_client_id_spotify",
    "client_secret": "seu_client_secret_spotify",
    "redirect_uri": "http://127.0.0.1:8888/callback",
    "download_path": "./downloads"
  }'
Inicie um download de teste:

curl -X POST "http://localhost:8801/downloads" \
  -H "Authorization: Bearer seu_token" \
  -H "Content-Type: application/json" \
  -d '{
    "spotify_id": "id_da_musica_ou_playlist",
    "type": "track",
    "priority": 5
  }'
Estrutura do Projeto
spotify-downloader-api/
├── auth.py                # Autenticação e controle de acesso
├── config.py              # Configurações da aplicação
├── database.py            # Conexão com o banco de dados
├── download_queue.py      # Gerenciamento da fila de downloads
├── downloader.py          # Funções de download do Spotify
├── main.py                # Aplicação FastAPI principal
├── models.py              # Modelos SQLAlchemy e esquemas Pydantic
├── requirements.txt       # Dependências do projeto
├── .env                   # Variáveis de ambiente (não versionado)
├── .env.example           # Exemplo de configuração
├── README.md              # Documentação do projeto
├── LICENSE.md             # Licença
├── CONTRIBUTING.md        # Contribuições educacionais
├── SECURITY.md            # Informações de Segurança
└── CODE_OF_CONDUCT.md.md  # Guia de contribuição
Fluxo de Funcionamento
O usuário autentica-se e recebe um token JWT
O usuário configura suas credenciais do Spotify
O usuário solicita um download de faixa ou playlist
O download é adicionado à fila com uma prioridade
O gerenciador de downloads processa os downloads em paralelo
O usuário pode acompanhar o progresso do download
Ao finalizar, o arquivo fica disponível para download
Endpoints Principais
Autenticação
POST /users/ - Criar novo usuário
POST /token - Obter token de acesso
GET /users/me - Dados do usuário atual
Spotify
POST /spotify/config - Configurar credenciais do Spotify
GET /spotify/config - Obter configuração atual
GET /search - Pesquisar no Spotify
POST /extract-id - Extrair ID do Spotify de uma URL
Downloads
POST /downloads - Iniciar novo download
GET /downloads - Listar downloads do usuário
GET /downloads/{download_id} - Status de um download específico
DELETE /downloads/{download_id} - Cancelar um download
GET /queue/status - Status da fila de downloads
GET /files/{file_path} - Baixar arquivo
Admin
GET /admin/users - Listar todos os usuários
PUT /admin/users/{user_id} - Atualizar usuário
DELETE /admin/users/{user_id} - Excluir usuário
📚 Conceitos Aprendidos
Este projeto demonstra diversos conceitos importantes:

Arquitetura de APIs REST com FastAPI
Autenticação JWT e controle de acesso
ORM com SQLAlchemy para interação com banco de dados
Processamento assíncrono e gerenciamento de filas
Integração com APIs externas (Spotify API)
Validação de dados com Pydantic
Middleware e CORS para aplicações web
Estruturação de projetos Python profissionais
Documentação automática com OpenAPI/Swagger
⚠️ Disclaimers Importantes
Este projeto é apenas para fins educacionais e de aprendizado
Não incentivamos ou apoiamos o uso para download de conteúdo protegido por direitos autorais
Os usuários são responsáveis por cumprir todas as leis aplicáveis e termos de serviço
Este projeto não tem afiliação oficial com o Spotify
🗒️ A fazer
Criar um frontend
Contribuições
Contribuições educacionais são bem-vindas! Por favor, leia o arquivo CODE_OF_CONDUCT.md para mais informações sobre como contribuir de forma educativa para este projeto.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Lembre-se: Este é um projeto educacional. Use-o para aprender sobre desenvolvimento Python, APIs e arquitetura de software. Sempre respeite os direitos autorais e termos de serviço das plataformas utilizadas.