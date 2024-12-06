var inputboxhuzz;

window.addEventListener("load", addListener);

function addListener(){
    KenCarsonHide()
    LattafaHide()
    LiamHide()
    AStarHide()
    GreenHide()
    document.getElementById("ButtonHuzz").addEventListener("click", Submit);
}

function LattafaHide(){
    document.getElementById("Huzz_3").hidden = true;
}

function LiamHide(){
    document.getElementById("Huzz_2").hidden = true;
}

function AStarHide(){
    document.getElementById("Huzz_1").hidden = true;
}

function GreenHide(){
    document.getElementById("Huzz_0").hidden = true;
}

function KenCarsonHide(){
    document.getElementById("KenCarsonOutput").hidden = true;
}

function HideEverythingMain(){
    document.getElementById("MainPart").hidden = true;
}

function Submit(){
    inputboxhuzz = document.getElementById("InputHuzz").value;
    if(inputboxhuzz >= 4){
        var audio = new Audio('laughing.mp3')
        audio.play();
        HideEverythingMain();
        document.getElementById("KenCarsonOutput").hidden = false;
    }
    else{
        if(inputboxhuzz == 3){
            HideEverythingMain()
            document.getElementById("Huzz_3").hidden = false;
        }
        else{
            if(inputboxhuzz == 2){
                document.getElementById("Huzz_2").hidden = false;
            }
            else{
                if(inputboxhuzz == 1){
                    document.getElementById("Huzz_1").hidden = false;
                }
                else{
                    if (inputboxhuzz == 0) {
                        var audio3 = new Audio("smelly.mp3")
                        audio3.play()
                        document.getElementById("Huzz_0").hidden = false;
                    }
                }
            }
        }
    }
}