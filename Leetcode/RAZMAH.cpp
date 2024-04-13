#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    int N, K;
    std::cin >> N >> K;

    std::vector<int> A(N);
    for (int i = 0; i < N; ++i) {
        std::cin >> A[i];
    }

    std::sort(A.begin(), A.end());

    double min_relative_range = std::numeric_limits<double>::max();
    std::vector<int> min_subset;

    for (int i = 0; i <= N - K; ++i) {
        double relative_range = static_cast<double>(A[i + K - 1] - A[i]) / A[i];
        if (relative_range < min_relative_range) {
            min_relative_range = relative_range;
            min_subset = std::vector<int>(A.begin() + i, A.begin() + i + K);
        }
    }

    std::cout << min_relative_range << std::endl;
    for (int num : min_subset) {
        std::cout << num << " ";
    }

    return 0;
}