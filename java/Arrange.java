
import java.util.*;

class Arrange {
    static int[] dx = {0, 0, -1, 1};
    static int[] dy = {-1, 1, 0, 0};

    static class Point {
        int x, y, dist;

        Point(int x, int y, int dist) {
            this.x = x;
            this.y = y;
            this.dist = dist;
        }
    }

    public static int solve(int N, int M, char[][] plan) {
        int sheets = N / M;
        char[][][] grid = new char[sheets][sheets][M * M];
        int startX = -1, startY = -1, endX = -1, endY = -1;

        // Step 1: Divide into individual sheets
        for (int i = 0; i < sheets; i++) {
            for (int j = 0; j < sheets; j++) {
                for (int x = 0; x < M; x++) {
                    for (int y = 0; y < M; y++) {
                        grid[i][j][x * M + y] = plan[i * M + x][j * M + y];
                        if (plan[i * M + x][j * M + y] == 'S') {
                            startX = i * M + x;
                            startY = j * M + y;
                        }
                        if (plan[i * M + x][j * M + y] == 'D') {
                            endX = i * M + x;
                            endY = j * M + y;
                        }
                    }
                }
            }
        }

        // Step 2: BFS to find shortest path
        return bfs(plan, startX, startY, endX, endY, N);
    }

    private static int bfs(char[][] plan, int startX, int startY, int endX, int endY, int N) {
        Queue<Point> queue = new LinkedList<>();
        boolean[][] visited = new boolean[N][N];
        queue.add(new Point(startX, startY, 0));
        visited[startX][startY] = true;

        while (!queue.isEmpty()) {
            Point curr = queue.poll();
            if (curr.x == endX && curr.y == endY) {
                return curr.dist;
            }

            for (int i = 0; i < 4; i++) {
                int nx = curr.x + dx[i];
                int ny = curr.y + dy[i];

                if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny] && (plan[nx][ny] == 'T' || plan[nx][ny] == 'D')) {
                    visited[nx][ny] = true;
                    queue.add(new Point(nx, ny, curr.dist + 1));
                }
            }
        }

        return -1; // If no path found
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        sc.nextLine();

        char[][] plan = new char[N][N];
        for (int i = 0; i < N; i++) {
            plan[i] = sc.nextLine().toCharArray();
        }

        System.out.println(solve(N, M, plan));
    }
}
