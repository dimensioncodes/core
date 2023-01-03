import java.io.File;
import java.io.FileReader;
import java.util.List;
import java.util.function.Function;

public class DeployServer {
  public static void main(String[] args) {
    if (supportsFileAPI()) {
      uploadImage();
    } else {
      System.out.println("Your browser is too old to support HTML5 File API");
      document.getElementById("brain").setAttribute("style", "opacity: 0.1");
      wait(1);
      window.location.replace("/Pages/CloudDeploy.html");
    }
  }

  private static void uploadImage() {
    var preview = document.getElementById("show-code");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader(file);

    var dockerCompose = "/application.*/";

    if (file.getType().matches(dockerCompose)) {
      reader.onLoad(event -> {
        preview.innerHTML = event.getTarget().getResult();
        var brainStyle = document.getElementById("brain");
        brainStyle.setAttribute("style", "opacity: 1");
      });
    } else {
      preview.innerHTML =
          "<span class='WrongFormat_ERROR'>DimensionCloud can only deploy .yml [ docker-compose ]</span>";
      document.getElementById("brain").setAttribute("style", "opacity: 0.1");
      wait(1);
      window.location.replace("/Pages/CloudDeploy.html");
    }
    reader.readAsText(file);
  }

  private static boolean supportsFileAPI() {
    return (
        window.getFile() != null
        && window.getFileReader() != null
        && window.getFileList() != null
        && window.getBlob() != null
    );
  }

  private static void wait(int seconds) {
    try {
      Thread.sleep(seconds * 1000);
    } catch (InterruptedException e) {
      // Handle interrupted exception
    }
  }
}

