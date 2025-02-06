## Matrix son varios arreglos dentro de un arreglo grande
##A matrix is a two-dimensional array.
##It is a grid of numbers arranged in rows and columns.
matrix = [
        [0,1,0],
        [3,8,6],
        [5,7,0]
]

matrix[2][1]

print(matrix[2][1])

##Result is 7 

##Daily challenge
# El objetivo de este ejercicio es descifrar un mensaje oculto en una matriz 
# (un arreglo bidimensional de caracteres). Para ello, seguimos el método de Neo en The Matrix:

# Primero con los dos bucles: Leeemos la matriz por columnas, de arriba hacia abajo y de izquierda a derecha.
# y esto nos dará como resultado una mezcla de letras, espacios y símbolos.

# Extraer solo los caracteres alfabéticos (letras) y eliminar los caracteres especiales.
# Reemplazar cualquier secuencia de símbolos y espacios entre dos letras por un solo espacio.
# Unir los caracteres resultantes en un mensaje legible.
#ex1
# matrix = [
#     ['7', 'i', 'i'],
#     ['T', 's', 'x'],
#     ['h', '%', '?'],
#     ['i', ' ', '#'],
#     ['s', 'M', ' '],
#     ['$', 'a', ' '],
#     ['#', 't', '%'],
#     ['^', 'r', '!']
# ]

##2. Recorrer la matriz por columnas
# En lugar de leer por filas (de izquierda a derecha), 
# debemos leer columna por columna, de arriba a abajo.

# Ejemplo:
# Primera columna: 7, T, h, i, s, $, #, ^
# Segunda columna: i, s, %, , M, a, t, r
# Tercera columna: i, x, ?, #, , , %, !