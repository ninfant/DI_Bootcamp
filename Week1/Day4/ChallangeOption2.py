import re  # Para limpiar los símbolos

# Definir la matriz como una cadena de texto
matrix_string = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''

# 1 Convertir la cadena en una lista 2D (matriz)
matrix = []
rows = matrix_string.split('\n')  # Dividimos en filas #['7ii', 'Tsx', 'h%?', 'i #', 'sM ', '$a ', '#t%', '^r!']
# print(rows)

for row in rows:
    matrix.append(list(row))  # Convertimos cada fila en una lista de caracteres [['7', 'i', 'i'],.. 
                                                                                #                   ]
# print(matrix)

# # 2 Leer la matriz *por columnas*, en lugar de filas
columns = []
num_columns = len(matrix[0])  # calcula cuantas columnas hay: que es 3, matrix[0] es la primera fila
#print (num_columns )

for i in range(num_columns): #i=0 recorremos la primera columna
    column_text = ""
    for row in matrix:
        column_text += row[i]  # en la priemra iteracion tomamos el primer carácter de cada fila, en la segunda iterac Tomamos el segundo carácter de cada fila
    columns.append(column_text)  # Guardar la columna como texto

# print(columns)

# # 3 Unir todas las letras y espacios en una sola cadena
raw_text = "".join(columns)
print(raw_text)
# # 4 Reemplazar cualquier grupo de caracteres no alfabéticos entre letras con un solo espacio
decoded_message = re.sub(r'[^a-zA-Z]+', ' ', raw_text).strip()

# # 5 Imprimir el mensaje final
print(decoded_message)
