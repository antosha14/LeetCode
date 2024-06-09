#include <iostream>
#include <vector>
#include <unordered_map>

void countPerpendicularLines(int N, std::vector<std::vector<int>>& aliceLines, int Q, std::vector<std::vector<int>>& bobLines) {
    std::unordered_map<int, int> perpendicularCounts;

    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < Q; ++j) {
            if (aliceLines[i][0] * bobLines[j][0] + aliceLines[i][1] * bobLines[j][1] == 0) {
                perpendicularCounts[j]++;
            }
        }
    }

    for (int j = 0; j < Q; ++j) {
        std::cout << perpendicularCounts[j] << std::endl;
    }
}

int main() {
    int N, Q;
    std::cin >> N;

    std::vector<std::vector<int>> aliceLines(N, std::vector<int>(3));
    for (int i = 0; i < N; ++i) {
        std::cin >> aliceLines[i][0] >> aliceLines[i][1] >> aliceLines[i][2];
    }

    std::cin >> Q;

    std::vector<std::vector<int>> bobLines(Q, std::vector<int>(3));
    for (int i = 0; i < Q; ++i) {
        std::cin >> bobLines[i][0] >> bobLines[i][1] >> bobLines[i][2];
    }

    countPerpendicularLines(N, aliceLines, Q, bobLines);

    return 0;
}





#include <iostream>
#include <vector>

void countPerpendicularLines(int N, std::vector<std::vector<int>>& aliceLines, int Q, std::vector<std::vector<int>>& bobLines) {
    std::vector<int> perpendicularCounts(Q, 0);

    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < Q; ++j) {
            if (aliceLines[i][0] * bobLines[j][0] + aliceLines[i][1] * bobLines[j][1] == 0) {
                perpendicularCounts[j]++;
            }
        }
    }

    for (int j = 0; j < Q; ++j) {
        std::cout << perpendicularCounts[j] << std::endl;
    }
}

int main() {
    int N, Q;
    std::cin >> N;

    std::vector<std::vector<int>> aliceLines(N, std::vector<int>(3));
    for (int i = 0; i < N; ++i) {
        std::cin >> aliceLines[i][0] >> aliceLines[i][1] >> aliceLines[i][2];
    }

    std::cin >> Q;

    std::vector<std::vector<int>> bobLines(Q, std::vector<int>(3));
    for (int i = 0; i < Q; ++i) {
        std::cin >> bobLines[i][0] >> bobLines[i][1] >> bobLines[i][2];
    }

    countPerpendicularLines(N, aliceLines, Q, bobLines);

    return 0;
}