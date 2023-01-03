import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.awt.event.TouchEvent;
import java.awt.event.TouchListener;
import javax.swing.JComponent;

public class DragController implements MouseListener, MouseMotionListener, TouchListener {
  private int initialX;
  private int initialY;
  private int currentX;
  private int currentY;
  private boolean dragging;

  public DragController(component) {
    component.addMouseListener(this);
    component.addMouseMotionListener(this);
    component.addTouchListener(this);
  }

  @Override
  public void mousePressed(_MouseEvent e) {
    initialX = e.getX();
    initialY = e.getY();
    dragging = true;
  }

  @Override
  public void mouseDragged(e) {
    if (dragging) {
      currentX = e.getX();
      currentY = e.getY();
      int deltaX = currentX - initialX;
      int deltaY = currentY - initialY;
      JComponent component = (JComponent) e.getSource();
      component.setLocation(component.getX() + deltaX, component.getY() + deltaY);
    }
  }

  @Override
  public void mouseReleased() {
    dragging = false;
  }

  @Override
  public void touchPressed(e) {
    initialX = e.getX();
    initialY = e.getY();
    dragging = true;
  }

  @Override
  public void touchMoved(e) {
    if (dragging) {
      currentX = e.getX();
      currentY = e.getY();
      int deltaX = currentX - initialX;
      int deltaY = currentY - initialY;
      JComponent component = (JComponent) e.getSource();
      component.setLocation(component.getX() + deltaX, component.getY() + deltaY);
    }
  }

  @Override
  public void touchReleased(e) {
    dragging = false;
  }

  // Unused event methods
  @Override
  public void mouseClicked(e) {}

  @Override
  public void mouseEntered(e) {}

  @Override
  public void mouseExited(e) {}

  @Override
  public void touchClicked(e) {}

  @Override
  public void touchDoubleClicked(e) {}

  @Override
  public void touchTripleClicked(e) {}
}

