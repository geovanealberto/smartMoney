# smartMoney

LEGENDA:

'-' -> Topicos

'#' -> Comandos ( usar sem o #)

'LINK' -> Link para site da documentação, biblioteca, plugins e etc.

---------------------------------------------------------

-Instalar e configurar o React Native CLI

https://facebook.github.io/react-native/docs/getting-started 

-Instalar o Chocolatey

LINK:https://chocolatey.org/install

Instalar o NodeJS (versão 10.x), Python 2 e JDK8

    #choco install -y python2 jdk8

    #choco install nodejs-lts --version=10.16.3

Configurar a variável de ambiente ANDROID_HOME

Abrir as variáveis de ambiente
Definir a variável ANDROID_HOME com o caminho do SDK. Normalmente é c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk

-Instalar o React Native Cli

Abrir o console do NodeJS

Digitar:

    #npm install -g react-native-cli

Novo projeto
Acessar seu diretório de projetos
Digitar o comando:

    #react-native init <nome do projeto sem espaços ou acentos>

-Executando o projeto

Executar o Emulador ou conectar o cabo USB no Smartphone (depois de habilitado o modo de depuração do Android).
Acessar o diretório de projeto
Digitar o comando:

    #react-native run-android

----------------------------------------------------------------------------

Bibliotecas e Plugins

-Animações:

Permite criar animações de maior baixo nível e flexibilidade comparado com a API Animated do próprio React Native.
    
    #react-native-reanimated

LINK: https://github.com/software-mansion/react-native-reanimated
    
-Banco de Dados

BD pensado especialmente para mobile, uma opção a concorrer com o SQLite. É um banco de dados construído para ser executado diretamente nos celulares, tablets e usáveis.

    #realm-js

LINK: https://github.com/realm/realm-js
    
-Camera

Permite usar a câmera do celular com React Native.

    #react-native-camera
 
LINK: https://github.com/react-native-community/react-native-camera

-Geolocalização

Permite recuperar a descrição da localização a partir de coordenadas (lat/log).
    
    #react-native-geocoding

LINK: https://github.com/marlove/react-native-geocoding

-Gráficos

Fornece os mais comumente utilizados tipos de gráficos prontos para importar e utilizar.
     
    #react-native-svg-charts

LINK: https://github.com/JesperLekland/react-native-svg-charts

-Icones

Permite utilizar diversos ícones vetoriais de bibliotecas já existentes e também customizar ícones próprios.
    
    #react-native-vector-icons

LINK: https://github.com/oblador/react-native-vector-icons

-Informações do dispositivo

Permite pegar as informações do dispositivo como bateria, nome e id do dispositivo, etc.

    #react-native-device-info  

LINK: https://github.com/react-native-community/react-native-device-info

-Navegação

Permite fazer navegação entre as telas.

    #react-navigation
    
LINK:: https://reactnavigation.org/docs/en/getting-started.html


