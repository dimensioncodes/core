import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class DockerComposeUploader {
    public static void main(String[] args) {
        String dockerComposeFilePath = "/path/to/docker-compose.yml";

        try {
            String dockerComposeYaml = new String(Files.readAllBytes(Paths.get(dockerComposeFilePath)));
            String[] lines = dockerComposeYaml.split("\n");

            // Iterate through the lines of the Docker Compose file
            for (String line : lines) {
                // Check if the line specifies an image
                if (line.startsWith("  image:")) {
                    // Extract the image name from the line
                    String image = line.substring("  image:".length()).trim();
                    System.out.println("Docker image: " + image);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
