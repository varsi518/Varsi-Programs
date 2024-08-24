//Practice makes us perfect-codechef

import java.util.Scanner;
public class prog1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String a=sc.nextLine();
        int counter=0;
        String[] indi=a.split("\\s+");
        for(String b:indi){
            int number=Integer.parseInt(b);
            if(number >= 10){
                counter++;
            }
        }
        System.out.println(counter);
        sc.close();
    }
    
}
