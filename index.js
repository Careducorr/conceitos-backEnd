//Verbos http

// GET -> para ler ou extrair valor
//POST ->  enviar um valor
//PUT -> alterar um valor
//PATCH -> alterar um valor especícifo
//DELETE -> deletar um valor

//HTTP CODES (status de resposta)

// 1xx (que começam com 1 podendo ser 100 à 199) -> INFORMATIVOS 
// 2xx -> Confirmação/ sucesso
// 3xx -> Redirecionamento
// 4xx -> Erros no Client
// 5xx -> Erro no servidor

//Parâmetros de uma requisição (maneira de enviar informações na nossa requisição)

//ROUTE params -> envia os parâmetros (dados) na própria rota, geralmente ao final do end-point separado por /
//EX: http://profissaoprogramador.com.br/75421id

//QUERY params -> Funciona tipo o ROUTE, porém ao final do end-point utiliza "?" para o primeiro dados e "&" para os demais
//EX: http://profissaoprogramador.com.br?nome=Carlos&age=26&city=campinas

//BODY params -> Corpo da requisição (muito utilizado)

//HEADER params -> Envio de informações adicionais (ver na prática)



//API (aplication programin interface 'interface de programação de aplicativos')
//API REST (representation state transfer -> transferência representacional de estado)

//REST é composto por seis regras

//1 Client servidor -> Cada um deve ter sua responsabilidade e as responsabilidades devem ser únicas. Então 
//cada um tem seu papel, e não é preocupação de um o papel do outro.

//2 STATELESS -> O servidor não armazena estados das requisições.

//3 CACHE -> A aplicação deve ter condições de implementação de cache (informação temporária)

//4 INTERFACE UNIFORME 
    // - indentificação de recursos
    // - representação de recursos
    // - mensagem descritivas
    // - hateoas

//5 APP tem que ser dividida em camadas

//6 Código sobre demanda.

//Nodejs

// é uma combinação da engine V8 + libUV + conjunto de módulos

// o node é single thread e non bloking I/0 
