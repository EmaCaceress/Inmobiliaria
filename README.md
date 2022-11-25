# Inmobiliaria

Version de node 16.13.1

Version de NPM 6.14.16

Revisar la version de node con node --version

Revisar la version de npm con npm -v

Luego de revisar nuestras versiones hacer un npm install y poner en la consola un npm start



# subir cambios a la rama

Para no cagarnos a trompadas y tener mas o menos ordenado 

Vamos a nuestra rama principal que en este caso seria master

git checkout master

siempre que estemos en esta rama por precauciones ponemos git fetch y git pull con esto traeriamos los ultimos cambios de master

para empezar a trabajar creariamos una rama nueva que se llame con git checkout -b 'nombre de lo que hariamos'

luego de terminar de trabajar hariamos un git add . git commit -m "cambios que metemos" y antes del push iriamos a master con un git checkout master
traeriamos los ultimos cambios por si acaso con git fetch y git pull, iriamos otra vez a nuestra rama git checkout "nombre de nuestra rama" una vez en nuestra rama hacemos git merge master para combinar las ramas y resolver conflictos en caso de que aparezcan. y git push origin Nombre de nuestra rama"