
import java.util.*;

public class NaniGame {
    static class Cell {
        int x, y, steps;

        Cell(int x, int y, int steps) {
            this.x = x;
            this.y = y;
            this.steps = steps;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        int[][] board = new int[N][M];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                board[i][j] = sc.nextInt();
            }
        }

        int startX = sc.nextInt();
        int startY = sc.nextInt();
        int destX = sc.nextInt();
        int destY = sc.nextInt();

        int result = bfs(N, M, board, startX, startY, destX, destY);
        System.out.println(result == Integer.MAX_VALUE ? "Impossible" : result);
    }

    private static int bfs(int N, int M, int[][] board, int startX, int startY, int destX, int destY) {
        startX = stabilize(startX, startY, board);
        if (!isStable(destX, destY, board)) {
            return Integer.MAX_VALUE;
        }

        Queue<Cell> queue = new LinkedList<>();
        queue.add(new Cell(startX, startY, 0));
        boolean[][] visited = new boolean[N][M];
        visited[startX][startY] = true;

        while (!queue.isEmpty()) {
            Cell current = queue.poll();
            int x = current.x, y = current.y, steps = current.steps;

            if (x == destX && y == destY) {
                return steps;
            }

            // Horizontal moves (left, right)
            if (isStable(x, y, board)) {
                for (int[] dir : new int[][]   {  { 0,  -1  }, {   0, 1 } }) {
                    int nx = x, ny = y + dir[1];
                    if (ny >= 0 && ny < M && !visited[nx][ny]) {
                        queue.add(new Cell(nx, ny, steps + 1));
                        visited[nx][ny] = true;
                    }
                }
            }

            // Upward moves using lifts
            if (board[x][y] == 1) {
                for (int nx = x - 1; nx >= 0; nx--) {
                    if (board[nx][y] == 0 && nx != 0)
                        
                        continue;
                    nx = stabilize(nx, y, board);
                    if (!visited[nx][y]) {
                        queue.add(new Cell(nx, y, steps + 1));
                        visited[nx][y] = true;
                    }
                }
            }
        }
        return Integer.MAX_VALUE;
    }

    private static int stabilize(int x, int y, int[][] board) {
        int N = board.length;
        while (x < N - 1 && board[x + 1][y] == 0) {
            x++;
        }
        return x;
    }

    private static boolean isStable(int x, int y, int[][] board) {
        int N = board.length;
        return x == N - 1 || board[x + 1][y] == 1;
    }
}
class Gravity
{
public static void main(String args[])
{

}
}