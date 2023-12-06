import java.util.HashMap;
import java.util.Map;

public class AlienDictionary {
    public static boolean isAlienSorted(String[] palabras, String orden) {
        Map<Character, Integer> alphabet = new HashMap<>();
        for (int i = 0; i < orden.length(); i++) {
            alphabet.put(orden.charAt(i), i);
        }

        for (int j = 1; j < palabras.length; j++) {
            if (!isWordSorted(palabras[j - 1], palabras[j], alphabet)) {
                return false;
            }
        }

        return true;
    }

    private static boolean isWordSorted(String word1, String word2, Map<Character, Integer> alphabet) {
        int maxLength = Math.min(word1.length(), word2.length());
        for (int i = 0; i < maxLength; i++) {
            char char1 = word1.charAt(i);
            char char2 = word2.charAt(i);
            if (alphabet.get(char1) < alphabet.get(char2)) {
                return true;
            } else if (alphabet.get(char1) > alphabet.get(char2)) {
                return false;
            }
        }
        return word1.length() <= word2.length();
    }
}
