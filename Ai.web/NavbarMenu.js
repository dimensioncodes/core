//ONLOAD JAVA START ////////////////////////////////////////////

//ONLOAD JAVA END //////////////////////////////////////////////

//NAVBAR FUNCTIONS CALLBACKS //////////////////////////////////

public void home() {
    try {
        Desktop.getDesktop().browse(new URI("https://dimension.codes/"));
    } catch (IOException | URISyntaxException e) {
        e.printStackTrace();
    }
}

public void projects() {
    try {
        Desktop.getDesktop().browse(new URI("/Pages/projects.html"));
    } catch (IOException | URISyntaxException e) {
        e.printStackTrace();
    }
}

public void price() {
    try {
        Desktop.getDesktop().browse(new URI("/Pages/price.html"));
    } catch (IOException | URISyntaxException e) {
        e.printStackTrace();
    }
}

public void aboutus() {
    try {
        Desktop.getDesktop().browse(new URI("/Pages/aboutus.html"));
    } catch (IOException | URISyntaxException e) {
        e.printStackTrace();
    }
}

public void login() {
    try {
        if (Desktop.getDesktop().browse(new URI(window.location.href)).toString().indexOf("projects") != -1) {
            OpeniFrame();
            OpenToolBar();
        }
        if (Desktop.getDesktop().browse(new URI(window.location.href)).toString().indexOf("CloudDeploy") != -1) {
            OpenCloudDeploy();
        }
        if (Desktop.getDesktop().browse(new URI(window.location.href)).toString().indexOf("aboutus") != -1) {
            OpenSecureServer();
        }
    } catch (IOException | URISyntaxException e) {
        e.printStackTrace();
    }
}

public void CloudDeploy() {
    try {
        Desktop.getDesktop().browse(new URI("/Pages/CloudDeploy.html"));
    } catch (IOException | URISyntaxException e) {
        e.printStackTrace();
    }
}

//NAVBAR FUNCTIONS CALLBACKS END /////////////////////////////

