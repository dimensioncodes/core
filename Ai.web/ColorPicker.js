import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JPanel;

public class LiquidPicker {
  public static void main(String[] args) {
    JButton colorVar1Button = new JButton("Color 1");
    colorVar1Button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        setColorVar1();
      }
    });

    JButton colorVar2Button = new JButton("Color 2");
    colorVar2Button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        setColorVar2();
      }
    });

    JButton colorVar3Button = new JButton("Color 3");
    colorVar3Button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        setColorVar3();
      }
    });

    // Repeat for remaining color buttons

    JPanel buttonPanel = new JPanel();
    buttonPanel.add(colorVar1Button);
    buttonPanel.add(colorVar2Button);
    buttonPanel.add(colorVar3Button);
    // Add remaining

