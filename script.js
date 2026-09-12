var baseDonnees = {
"PSG": { tirsCadres: [6, 5, 8] },
"OM": { tirsCadres: [4, 5, 6] },
"Real Madrid": { tirsCadres: [7, 6, 8] },
"Barcelone": { tirsCadres: [5, 7, 8] },
"Liverpool": { tirsCadres: [6, 5, 7] },
"Manchester City": { tirsCadres: [8, 7, 6] },
"Bayern": { tirsCadres: [7, 6, 8] },
"Juventus": { tirsCadres: [5, 4, 6] },
"Chelsea": { tirsCadres: [6, 4, 5] },
"Inter": { tirsCadres: [7, 6, 5] },
"Arsenal": { tirsCadres: [7, 6, 8] },
"Atletico": { tirsCadres: [5, 4, 7] },
"Dortmund": { tirsCadres: [6, 5, 7] },
"Naples": { tirsCadres: [6, 5, 7] },
"Milan": { tirsCadres: [5, 6, 4] }
};

function recuperer(){
    var nomDom = document.getElementById("nom_dom").value;
    var nomExt = document.getElementById("nom_ext").value;
    var dataDom = baseDonnees[nomDom];
    var dataExt = baseDonnees[nomExt];
    
    if(dataDom){
        document.getElementById("dom_m1").value = dataDom.tirsCadres[0];
        document.getElementById("dom_m2").value = dataDom.tirsCadres[1];
        document.getElementById("dom_m3").value = dataDom.tirsCadres[2];
    } else {
        alert("Equipe domicile non trouvee : " + nomDom);
    }
    
    if(dataExt){
        document.getElementById("ext_m1").value = dataExt.tirsCadres[0];
        document.getElementById("ext_m2").value = dataExt.tirsCadres[1];
        document.getElementById("ext_m3").value = dataExt.tirsCadres[2];
    } else {
        alert("Equipe exterieur non trouvee : " + nomExt);
    }
}

function predire(){
    var nomDom = document.getElementById("nom_dom").value;
    var nomExt = document.getElementById("nom_ext").value;
    
    var d1 = parseFloat(document.getElementById("dom_m1").value) || 0;
    var d2 = parseFloat(document.getElementById("dom_m2").value) || 0;
    var d3 = parseFloat(document.getElementById("dom_m3").value) || 0;
    var e1 = parseFloat(document.getElementById("ext_m1").value) || 0;
    var e2 = parseFloat(document.getElementById("ext_m2").value) || 0;
    var e3 = parseFloat(document.getElementById("ext_m3").value) || 0;
    
    var moyDom = (d1 + d2 + d3) / 3;
    var moyExt = (e1 + e2 + e3) / 3;
    var pd = (moyDom * 1.1) * 0.45;
    var pe = (moyExt * 0.9) * 0.45;
    var total = pd + pe;
    
    var analyse = "";
    if(moyDom > moyExt + 1.5){
        analyse = "🔥 " + nomDom + " domine largement";
    } else if(moyExt > moyDom + 1.5){
        analyse = "🔥 " + nomExt + " est plus dangereux";
    } else {
        analyse = "⚖️ Match equilibre";
    }
    
    document.getElementById("resultat").innerHTML = 
        "<div class='result-card'>" +
        "<h3>📊 Moyennes sur 3 matchs</h3>" +
        "<p><strong>" + nomDom + "</strong> : " + moyDom.toFixed(2) + " tirs cadres/match</p>" +
        "<p><strong>" + nomExt + "</strong> : " + moyExt.toFixed(2) + " tirs cadres/match</p>" +
        "<div class='separateur'></div>" +
        "<h3>🔮 Prediction 1ere MT</h3>" +
        "<p><strong>" + nomDom + "</strong> : " + pd.toFixed(2) + " tirs cadres</p>" +
        "<p><strong>" + nomExt + "</strong> : " + pe.toFixed(2) + " tirs cadres</p>" +
        "<p class='total'>Total estime : " + total.toFixed(2) + "</p>" +
        "<p class='analyse'>" + analyse + "</p>" +
        "</div>";
  }
