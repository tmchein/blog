---
title: AWS Series - Identity and Access Manager
excerpt: Comparto un poco sobre lo que he aprendido sobre AWS, en este caso IAM.
date: 2023-01-12
thumb: https://i.postimg.cc/pTHpKG2g/aws-iam.webp
---

Hola a todos, ha iniciado el 2023 y actualmente me encuentro haciendo un curso
de AWS, para posteriormente poder aplicar a la certificacion de AWS, más
especificamente el Certified Developer.

A lo largo de este post hablaremos sobre IAM y todo lo que he aprendido sobre
esta herramienta, de esta manera podré usar estos posts como notas y poder
re-leerlas luego.

## IAM

IAM se traduce a Identity and Access Management, es una herramienta que nos
ayuda a proveer accesos a los usuarios en nuestra compañía y darles una
identidad o credencial, siendo la identidad la funciondalidad que tenemos para
añadir usuarios a grupos y/o dar ciertos permisos a nuestros usuarios. Es
importante reconocer que los usuarios pueden pertenecer a **GRUPOS** y que
pueden pertenecer a ninguno, uno o más de un grupo como se muestra en la
siguiente figura.

<img align="center" src="https://i.postimg.cc/Y9G5Shxq/group-IAM.webp" alt="Grupo de usuarios en aws, a la izquierda se encuentra el grupo de desarrolladores, a la derecha se encuentra el grupo de operaciones, un usuario del grupo de desarrolladores y un usuario del grupo de operaciones pertenecen al grupo de auditoría. Se muestra un usuario que no pertenece a ningun grupo.">

## Permisos

Una de las ventajas de utilizar IAM es que podemos dar permisos, estos permisos
se llaman politicas y podemos añadir estos permisos a usuarios o grupos. Una
política puede ser definida como una estructura en formato _**JSON**_ la cual
encapsula información sobre qué usuario o grupo tiene una serie de permisos o
no.

Una política se representa mediante un ****JSON**** como se muestra en la
siguiente figura.

<img align="center" width="630" src="https://i.postimg.cc/bwKnD5x0/Ejemplo-Permissions-4.webp" alt="Ejemplo de una política en formato JSON">

<figcaption>
Recordemos que los permisos deben ser dados siguiendo el principio de menor privilegio, no dar más permisos de los que se necesitan.
</figcaption>

## Políticas

Las politicas pueden asignarse a un conjunto especifico de grupos o a usuarios
individualmente. Una política asignada a un usuario individual se denomina
"inline policy" traducido al español sería una "política en linea"

Las políticas siguen la siguiente estructura:

- Version: La version del idioma de la política
- id: Un identificador
- Statements: un set de uno o más statements (declaraciones)

Los statements siguen la siguiente estructura:

```
Sid: un identificador para el statement (opcional)
Effect: especifica si el statement permite o deniega accesos (Allow, Deny)
Principal: especifica el usuario, grupo o rol al que se le asigna la politica.
Action: lista de acciones que la política permite o deniega.
Resource: lista de recursos a la cual las acciones son aplicadas.
Condition: Condiciones para cuando esta política está en efecto.
```

## Políticas de contraseñas

Una de las políticas que **DEBEMOS** tener en IAM es una política de contraseña,
con esta podemos ayudar a reforzar la seguridad de las cuentas de los usuarios
que hacen parte de la organización.

Los beneficios son claros, entre más fuerte sea la contraseña, mayor seguridad
tendrán las cuentas.

En AWS podemos crear una política de contraseña, la cual nos permite definir una
serie de reglas que deben cumplir las contraseñas de los usuarios, estas reglas
son:

- Setear un mínimo de caracteres
- Requerir tipos de caracteres específicos
  - Incluir mayúsculas
  - Incluir minúsculas
  - Números
  - Caracteres no alfanuméricos
- Permitir que los usuarios puedan cambiar sus propias contraseñas.
- Requerir que los usuarios cambien su contraseña cada cierto periodo de tiempo.
- Prevenir el re uso de contraseñas.

## Autenticación de múltiples factores (MFA)

En AWS, la autenticación de multiple factor es algo que también debemos tener,
esto significa que podemos añadir una nueva capa de seguridad a nuestras cuentas
configurando el MFA.

Hay varias formas de configurar el MFA.

- Mediante la aplicación de Google Authenticator, la cual nos permite generar un
  código de 6 dígitos que debemos ingresar en la consola de AWS para poder
  acceder a nuestra cuenta.
- Una llave de seguridad de factor de dos pasos (U2F) como las llaves
  [Yubikey](https://www.yubico.com/?lang=es)
- Un dispositivo de llave Key Fob MFA
- Un dispositivo de llave Key Fob MFA para AWS GovCloud (US).

Es importante conocer que las llaves para AWS GovCloud son especificas para
aplicaciones del gobierno y que no cualquier persona tiene acceso a esto.

---

## Conclusion

Con esto concluimos este articulo donde comparto con ustedes lo que he ido
aprendiendo sobre AWS. IAM en mi opinión me parece bastante interesante de
aprender, siempre es importante entender como le podemos dar orden a los
permisos que damos a las personas y adicionalmente a las personas que hacen
parte de la organización en la que trabajamos.

Gracias por leer este articulo, espero que les haya gustado y que les haya
ayudado a entender un poco mas este servicio de AWS.

Atentamente,

Juan Rojas, mejor conocido como [@tmchein](https://twitter.com/tmchein)
