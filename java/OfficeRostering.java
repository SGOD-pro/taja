
import java.util.*;

class OfficeRostering {
    
    static int solution(int n, int m, int[][] arr, int k) {
        boolean[][] friends = new boolean[n][n];
        int[] currentStatus = new int[n];
        Arrays.fill(currentStatus, 1);

        for (int[] pair : arr) {
            friends[pair[0]][pair[1]] = true;
            friends[pair[1]][pair[0]] = true;
        }

        int currentCount = n;
        int days = 1;

        while (currentCount < k) {
            int[] nextStatus = new int[n];
            int newCount = 0;

            for (int i = 0; i < n; i++) {
                int friendsInOffice = 0;

                for (int j = 0; j < n; j++) {
                    if (friends[i][j] && currentStatus[j] == 1) {
                        friendsInOffice++;
                    }
                }

                if (currentStatus[i] == 1) {
                    nextStatus[i] = (friendsInOffice == 3) ? 1 : 0;
                } else {
                    nextStatus[i] = (friendsInOffice < 3) ? 1 : 0;
                }

                if (nextStatus[i] == 1) {
                    newCount++;
                }
            }

            if (newCount == 0) {
                return -1; // No change, can't reach target
            }

            currentCount += newCount;
            currentStatus = nextStatus;
            days++;
        }

        return days;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();

        int[][] frnd = new int[m][2];
        for (int i = 0; i < m; i++) {
            frnd[i][0] = sc.nextInt();
            frnd[i][1] = sc.nextInt();
        }

        int k = sc.nextInt();

        System.out.println(solution(n, m, frnd, k));
    }
}
