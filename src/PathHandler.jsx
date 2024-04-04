let defaultCEAFAVideoPH;
let defaultCICSVideoPH;
let defaultCITVideoPH;
let defaultGYMVideoPH;
let defaultRGRVideoPH;
let defaultSSCVideoPH;
let defaultSTEERHUBVideoPH;

let searchCEAFAVideoPH;
let searchCICSVideoPH;
let searchCITVideoPH;
let searchGYMVideoPH;
let searchRGRVideoPH;
let searchSSCVideoPH;
let searchSTEERHUBCVideoPH;

export { defaultCEAFAVideoPH, defaultCICSVideoPH, defaultCITVideoPH, defaultGYMVideoPH, defaultRGRVideoPH, defaultSSCVideoPH, defaultSTEERHUBVideoPH };

// export { searchCEAFAVideoPH, searchCICSVideoPH, searchCITVideoPH, searchGYMVideoPH, searchRGRVideoPH, searchSSCVideoPH, searchSTEERHUBCVideoPH };


const PathHandler = (buildingName) => {
    if (buildingName === 'GATE') {
        defaultCICSVideoPH = "src/assets/campus/gate/gatetocics.mp4";
        defaultCEAFAVideoPH = "src/assets/campus/gate/gatetoceafa.mp4";
        defaultCITVideoPH = "src/assets/campus/gate/gatetocit.mp4";
        defaultGYMVideoPH = "src/assets/campus/gate/gatetogym.mp4";
        defaultRGRVideoPH = "src/assets/campus/gate/gatetorgr.mp4";
        defaultSSCVideoPH = "src/assets/campus/gate/gatetossc.mp4";
        defaultSTEERHUBVideoPH = "src/assets/campus/gate/gatetosteerhub.mp4";
    } 
    else if (buildingName === 'CICS') {
        defaultCEAFAVideoPH = "src/assets/campus/cics/cicstoceafa.mp4";
        defaultCITVideoPH = "src/assets/campus/cics/cicstocit.mp4";
        defaultGYMVideoPH = "src/assets/campus/cics/cicstogym.mp4";
        defaultRGRVideoPH = "src/assets/campus/cics/cicstorgr.mp4";
        defaultSSCVideoPH = "src/assets/campus/cics/cicstossc.mp4";
        defaultSTEERHUBVideoPH = "src/assets/campus/cics/cicstosteerhub.mp4";
        defaultCICSVideoPH = "src/assets/campus/default.mp4";
    } 
    else if (buildingName === 'CEAFA') {
        defaultCICSVideoPH = "src/assets/campus/ceafa/ceafatocics.mp4";
        defaultCITVideoPH = "src/assets/campus/ceafa/ceafatocit.mp4";
        defaultGYMVideoPH = "src/assets/campus/ceafa/ceafatogym.mp4";
        defaultRGRVideoPH = "src/assets/campus/ceafa/ceafatorgr.mp4";
        defaultSSCVideoPH = "src/assets/campus/ceafa/ceafatossc.mp4";
        defaultSTEERHUBVideoPH = "src/assets/campus/ceafa/ceafatosteerhub.mp4";
        defaultCEAFAVideoPH = "src/assets/campus/default.mp4";
    } 
    else if (buildingName === 'CIT') {
        defaultCEAFAVideoPH = "src/assets/campus/cit/cittoceafa.mp4";
        defaultCICSVideoPH = "src/assets/campus/cit/cittocics.mp4";
        defaultGYMVideoPH = "src/assets/campus/cit/cittogym.mp4";
        defaultRGRVideoPH = "src/assets/campus/cit/cittorgr.mp4";
        defaultSSCVideoPH = "src/assets/campus/cit/cittossc.mp4";
        defaultSTEERHUBVideoPH = "src/assets/campus/cit/cittosteerhub.mp4";
        defaultCITVideoPH = "src/assets/campus/default.mp4";
    } 
    else if (buildingName === 'GYM') {
        defaultCEAFAVideoPH = "src/assets/campus/gym/gymtoceafa.mp4";
        defaultCICSVideoPH = "src/assets/campus/gym/gymtocics.mp4";
        defaultCITVideoPH = "src/assets/campus/gym/gymtocit.mp4";
        defaultRGRVideoPH = "src/assets/campus/gym/gymtorgr.mp4";
        defaultSSCVideoPH = "src/assets/campus/gym/gymtossc.mp4";
        defaultSTEERHUBVideoPH = "src/assets/campus/gym/gymtosteerhub.mp4";
        defaultGYMVideoPH = "src/assets/campus/default.mp4";
    } 
    else if (buildingName === 'RGR') {
        defaultCEAFAVideoPH = "src/assets/campus/rgr/rgrtoceafa.mp4";
        defaultCICSVideoPH = "src/assets/campus/rgr/rgrtocics.mp4";
        defaultCITVideoPH = "src/assets/campus/rgr/rgrtocit.mp4";
        defaultGYMVideoPH = "src/assets/campus/rgr/rgrtogym.mp4";
        defaultSSCVideoPH = "src/assets/campus/rgr/rgrtossc.mp4";
        defaultSTEERHUBVideoPH = "src/assets/campus/rgr/rgrtosteerhub.mp4";
        defaultRGRVideoPH = "src/assets/campus/default.mp4";
    } 
    else if (buildingName === 'STUDENT SERVICES') {
        defaultCEAFAVideoPH = "src/assets/campus/ssc/ssctoceafa.mp4";
        defaultCICSVideoPH = "src/assets/campus/ssc/ssctocics.mp4";
        defaultCITVideoPH = "src/assets/campus/ssc/ssctocit.mp4";
        defaultGYMVideoPH = "src/assets/campus/ssc/ssctogym.mp4";
        defaultRGRVideoPH = "src/assets/campus/ssc/ssctorgr.mp4";
        defaultSTEERHUBVideoPH = "src/assets/campus/ssc/ssctosteerhub.mp4";
        defaultSSCVideoPH = "src/assets/campus/default.mp4";
    } 
    else if (buildingName === 'STEERHUB') {
        defaultCEAFAVideoPH = "src/assets/campus/steerhub/steerhubtoceafa.mp4";
        defaultCICSVideoPH = "src/assets/campus/steerhub/steerhubtocics.mp4";
        defaultCITVideoPH = "src/assets/campus/steerhub/steerhubtocit.mp4";
        defaultGYMVideoPH = "src/assets/campus/steerhub/steerhubtogym.mp4";
        defaultRGRVideoPH = "src/assets/campus/steerhub/steerhubtorgr.mp4";
        defaultSSCVideoPH = "src/assets/campus/steerhub/steerhubtossc.mp4";
        defaultSTEERHUBVideoPH = "src/assets/campus/default.mp4";
    }
}

export default PathHandler;
