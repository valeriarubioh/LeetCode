import heapq
from collections import defaultdict


def reorganizeString(S: str) -> str:
    ocurrenciasPorCaracter = defaultdict(int)
    for caracter in S:
        ocurrenciasPorCaracter[caracter] += 1
        if ocurrenciasPorCaracter[caracter] > (len(S)+1) / 2: return ""
    colaPrioridad = []
    for caracter  in ocurrenciasPorCaracter:
        colaPrioridad.append((-ocurrenciasPorCaracter[caracter], caracter))
    heapq.heapify(colaPrioridad)

    stringOrdenada = []
    while 2 <= len(colaPrioridad):
        ocurrencia1, caracter1 = heapq.heappop(colaPrioridad)
        ocurrencia2, caracter2 = heapq.heappop(colaPrioridad)
        stringOrdenada.append(caracter1)
        stringOrdenada.append(caracter2)
        if ocurrencia1 + 1: heapq.heappush(colaPrioridad, (ocurrencia1 +1, caracter1))
        if ocurrencia2 + 1: heapq.heappush(colaPrioridad, (ocurrencia2 +1, caracter2))

    if colaPrioridad: return "".join(stringOrdenada) + colaPrioridad[0][1]
    return "".join(stringOrdenada)
    
print(reorganizeString("aaacb"))
