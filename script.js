var baseDonnees = {
// === PREMIER LEAGUE (20) ===
"Arsenal": { tirsCadres: [7, 6, 8] },
"Aston Villa": { tirsCadres: [6, 5, 7] },
"Bournemouth": { tirsCadres: [4, 5, 4] },
"Brentford": { tirsCadres: [5, 4, 6] },
"Brighton": { tirsCadres: [6, 4, 7] },
"Chelsea": { tirsCadres: [6, 4, 5] },
"Crystal Palace": { tirsCadres: [4, 5, 4] },
"Everton": { tirsCadres: [3, 4, 5] },
"Fulham": { tirsCadres: [5, 4, 5] },
"Ipswich": { tirsCadres: [3, 4, 3] },
"Leicester": { tirsCadres: [4, 5, 4] },
"Liverpool": { tirsCadres: [6, 5, 7] },
"Manchester City": { tirsCadres: [8, 7, 6] },
"Manchester United": { tirsCadres: [6, 5, 7] },
"Newcastle": { tirsCadres: [6, 5, 6] },
"Nottingham Forest": { tirsCadres: [5, 4, 5] },
"Southampton": { tirsCadres: [3, 3, 4] },
"Tottenham": { tirsCadres: [5, 6, 4] },
"West Ham": { tirsCadres: [4, 5, 5] },
"Wolves": { tirsCadres: [4, 6, 5] },

// === BUNDESLIGA (18) ===
"Bayern": { tirsCadres: [7, 6, 8] },
"Dortmund": { tirsCadres: [6, 5, 7] },
"Leipzig": { tirsCadres: [6, 5, 6] },
"Stuttgart": { tirsCadres: [5, 6, 5] },
"Hoffenheim": { tirsCadres: [5, 4, 6] },
"Leverkusen": { tirsCadres: [6, 7, 6] },
"Freiburg": { tirsCadres: [5, 5, 4] },
"Eintracht Francfort": { tirsCadres: [6, 5, 6] },
"Augsbourg": { tirsCadres: [4, 5, 4] },
"Mayence": { tirsCadres: [4, 4, 5] },
"Union Berlin": { tirsCadres: [4, 5, 4] },
"Monchengladbach": { tirsCadres: [5, 4, 5] },
"Werder Breme": { tirsCadres: [5, 4, 5] },
"Hambourg": { tirsCadres: [4, 4, 5] },
"Cologne": { tirsCadres: [4, 5, 4] },
"Schalke 04": { tirsCadres: [4, 4, 4] },
"Elversberg": { tirsCadres: [3, 4, 3] },
"Paderborn": { tirsCadres: [3, 4, 3] }
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
