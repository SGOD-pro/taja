import java.util.*;

class StringObsession {

    static HashMap<String, Integer> map = new HashMap<>();

    static int substr(String s1, String[] s2) {
        if (map.containsKey(s1)) {
            return map.get(s1);
        }

        int count = 0;

        for (String str : s2) {
            if (s1.contains(str)) {
                String s3 = s1.replaceFirst(str, "");
                count = Math.max(count, 1 + substr(s3, s2));
            }
        }

        map.put(s1, count);
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        sc.nextLine();

        String[] subStrings = sc.nextLine().split(" ");
        String mainStr = sc.nextLine();

        int result = substr(mainStr, subStrings);
        System.out.println(result);
    }
}
