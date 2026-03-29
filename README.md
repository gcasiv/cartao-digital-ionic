Cartão Digital Ionic

Descrição

Cartão Digital Ionic é um aplicativo híbrido desenvolvido com Ionic e Angular que permite apresentar informações pessoais, foto e detalhes do usuário de forma prática e intuitiva.

O app possui três telas principais:

Cartão: mostra nome, turma/unidade/turno e foto do usuário;
Sobre: apresenta informações adicionais sobre o usuário;
Configurações: permite ajustar preferências do aplicativo.

O projeto é modular, com componentes reutilizáveis e fácil de expandir para funcionalidades futuras.

Tecnologias utilizadas
Ionic Framework – desenvolvimento mobile híbrido
Angular – estrutura de componentes e rotas
TypeScript – lógica do app
SCSS – estilos avançados
Capacitor – integração com recursos do dispositivo
Git & GitHub – controle de versão

Funcionalidades
Visualização de cartão digital com informações do usuário
Tela “Sobre” com texto personalizado
Tela de Configurações para ajustes do app
Componentes reutilizáveis e overlays customizados
Navegação simples e intuitiva
Screenshots

Tela do Cartão


Tela Sobre


Tela de Configurações


(adicione suas imagens na pasta screenshots/)

Links importantes
Figma do projeto: https://www.figma.com/design/pr1vACXAWDTqYIHVvBxHDa/Cart%C3%A3o-Digital---Formadora-1--3-per%C3%ADodo-?m=auto&t=iB0JcrVgrpRYZXWD-6
Documentação PDF: 

Como executar o projeto
# Clonar repositório
git clone https://github.com/gcasiv/cartao-digital-ionic.git

# Entrar na pasta
cd cartao-digital-ionic

# Instalar dependências
npm install

# Rodar no navegador (modo desenvolvimento)
ionic serve

Para rodar em dispositivos Android ou iOS, configure o Capacitor e siga os comandos correspondentes.

Estrutura do projeto
src/
 ├── app/
 │   ├── components/      # Componentes reutilizáveis
 │   ├── pages/           # Telas: home, sobre, configurações
 │   ├── services/        # Serviços (ex: overlays)
 │   └── app.routes.ts    # Rotas do app
 ├── assets/              # Imagens e recursos
 └── global.scss          # Estilos globais
 
Contato
Desenvolvedor: Gustavo Casanova
E-mail GitHub: 214485084+gcasiv@users.noreply.github.com

