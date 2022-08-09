function soundClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fjjfr8c6o/', modelReady)
}

function modelReady()
{
    clasisifer.classify(gotResults);
}