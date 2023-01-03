import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JComponent;

public class ScreenControl {
  private static final String CLOUD_DEPLOY_PORTAL_ID = "CloudDeployPortal";
  private static final String TOOL_BAR_ID = "ToolBar";
  private static final String COLOR_MENU_ID = "color-menu";
  private static final String COLOR_BUTTON_CLOSE_ID = "color-buttonClose";
  private static final String PICKER_SELECTOR_ID = "picker-selector";
  private static final String SECURE_SERVER_ID = "secure-server";
  private static final String I_FRAME_PORTAL_ID = "iFramePortal";
  private static final String CONSOLE_INFO_ID = "consoleInfo";
  private static final String HIDDEN = "hidden";
  private static final String VISIBLE = "visible";

  public static void main(String[] args) {
    JButton closeCloudDeployButton = new JButton("Close Cloud Deploy");
    closeCloudDeployButton.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        closeCloudDeploy();
      }
    });

    JButton closeToolBarButton = new JButton("Close Tool Bar");
    closeToolBarButton.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        closeToolBar();
      }
    });

    JButton closeToolBarColorMenuButton = new JButton("Close Tool Bar Color Menu");
    closeToolBarColorMenuButton.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        closeToolBarColorMenu();
      }
    });

    JButton closeSecureServerButton = new JButton("Close Secure Server");
    closeSecureServerButton.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        closeSecureServer();
      }
    });

    JButton closeScreen5Button = new JButton("Close Screen 5");
    closeScreen5Button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        closeScreen5();
      }
    });

    JButton closeConsoleInfoButton = new JButton("Close Console Info");
    closeConsoleInfoButton.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        closeConsoleInfo();
      }
    });

    // Repeat for remaining close buttons

    JButton openiFrameButton = new JButton("Open iFrame");
    openiFrameButton.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        openiFrame();
      }
    });

    JButton openSecureServerButton = new JButton("Open Secure Server");
    openSecureServerButton.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(

