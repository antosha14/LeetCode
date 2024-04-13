def find_largest_T(N, M, canvas):
    max_T_size = 0

    for i in range(1, N - 1):
        for j in range(1, M - 1):
            if canvas[i][j] == 1:
                # Проверяем паттерн "T"
                if (
                    canvas[i - 1][j] == 1
                    and canvas[i + 1][j] == 1
                    and canvas[i][j - 1] == 1
                    and canvas[i][j + 1] == 0
                ):
                    # Вычисляем размер паттерна "T"
                    T_size = 1
                    k = 1
                    while i + k < N and canvas[i + k][j] == 1:
                        T_size += 1
                        k += 1
                    max_T_size = max(max_T_size, T_size)

    return max_T_size


# Ввод
N, M = map(int, input().split())
canvas = [list(map(int, input().split())) for _ in range(N)]

# Находим и выводим размер наибольшей белой "буквы Т"
print(find_largest_T(N, M, canvas))
