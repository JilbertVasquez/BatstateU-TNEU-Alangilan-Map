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

import gatetocics from "./assets/campus/gate/gatetocics.mp4";
import gatetoceafa from "./assets/campus/gate/gatetoceafa.mp4";
import gatetocit from "./assets/campus/gate/gatetocit.mp4";
import gatetogym from "./assets/campus/gate/gatetogym.mp4";
import gatetorgr from "./assets/campus/gate/gatetorgr.mp4";
import gatetossc from "./assets/campus/gate/gatetossc.mp4";
import gatetosteerhub from "./assets/campus/gate/gatetosteerhub.mp4";

import cicstoceafa from "./assets/campus/cics/cicstoceafa.mp4";
import cicstocit from "./assets/campus/cics/cicstocit.mp4";
import cicstogym from "./assets/campus/cics/cicstogym.mp4";
import cicstorgr from "./assets/campus/cics/cicstorgr.mp4";
import cicstossc from "./assets/campus/cics/cicstossc.mp4";

import ceafatocics from "./assets/campus/ceafa/ceafatocics.mp4";
import ceafatocit from "./assets/campus/ceafa/ceafatocit.mp4"
import ceafatogym from "./assets/campus/ceafa/ceafatogym.mp4"
import ceafatorgr from "./assets/campus/ceafa/ceafatorgr.mp4"
import ceafatossc from "./assets/campus/ceafa/ceafatossc.mp4"
import ceafatosteerhub from "./assets/campus/ceafa/ceafatosteerhub.mp4"

import cittoceafa from "./assets/campus/cit/cittoceafa.mp4";
import cittocics from "./assets/campus/cit/cittocics.mp4";
import cittogym from "./assets/campus/cit/cittogym.mp4";
import cittorgr from "./assets/campus/cit/cittorgr.mp4";
import cittossc from "./assets/campus/cit/cittossc.mp4";
import cittosteerhub from "./assets/campus/cit/cittosteerhub.mp4";

import gymtoceafa from "./assets/campus/gym/gymtoceafa.mp4";
import gymtocics from "./assets/campus/gym/gymtocics.mp4";
import gymtocit from "./assets/campus/gym/gymtocit.mp4";
import gymtorgr from "./assets/campus/gym/gymtorgr.mp4";
import gymtossc from "./assets/campus/gym/gymtossc.mp4";
import gymtosteerhub from "./assets/campus/gym/gymtosteerhub.mp4";

import rgrtoceafa from "./assets/campus/rgr/rgrtoceafa.mp4";
import rgrtocics from "./assets/campus/rgr/rgrtocics.mp4";
import rgrtocit from "./assets/campus/rgr/rgrtocit.mp4";
import rgrtogym from "./assets/campus/rgr/rgrtogym.mp4";
import rgrtossc from "./assets/campus/rgr/rgrtossc.mp4";
import rgrtosteerhub from "./assets/campus/rgr/rgrtosteerhub.mp4";

import ssctoceafa from "./assets/campus/ssc/ssctoceafa.mp4";
import ssctocics from "./assets/campus/ssc/ssctocics.mp4";
import ssctocit from "./assets/campus/ssc/ssctocit.mp4";
import ssctogym from "./assets/campus/ssc/ssctogym.mp4";
import ssctorgr from "./assets/campus/ssc/ssctorgr.mp4";
import ssctosteerhub from "./assets/campus/ssc/ssctosteerhub.mp4";

import steerhubtoceafa from "./assets/campus/steerhub/steerhubtoceafa.mp4";
import steerhubtocics from "./assets/campus/steerhub/steerhubtocics.mp4";
import steerhubtocit from "./assets/campus/steerhub/steerhubtocit.mp4";
import steerhubtogym from "./assets/campus/steerhub/steerhubtogym.mp4";
import steerhubtorgr from "./assets/campus/steerhub/steerhubtorgr.mp4";
import steerhubtossc from "./assets/campus/steerhub/steerhubtossc.mp4";

const PathHandler = (buildingName) => {
    if (buildingName === 'GATE') {
        defaultCICSVideoPH = gatetocics;
        defaultCEAFAVideoPH = gatetocit;
        defaultCITVideoPH = gatetocit;
        defaultGYMVideoPH = gatetogym;
        defaultRGRVideoPH = gatetorgr;
        defaultSSCVideoPH = gatetossc;
        defaultSTEERHUBVideoPH = gatetosteerhub;
    } 
    else if (buildingName === 'CICS') {
        defaultCEAFAVideoPH = cicstoceafa;
        defaultCITVideoPH = cicstocit;
        defaultGYMVideoPH = cicstogym;
        defaultRGRVideoPH = cicstorgr;
        defaultSSCVideoPH = cicstossc;
        defaultSTEERHUBVideoPH = cicstosteerhub;
        defaultCICSVideoPH = gatetocics;
    } 
    else if (buildingName === 'CEAFA') {
        defaultCICSVideoPH = ceafatocit;
        defaultCITVideoPH = ceafatocit;
        defaultGYMVideoPH = ceafatogym;
        defaultRGRVideoPH = ceafatorgr;
        defaultSSCVideoPH = ceafatossc;
        defaultSTEERHUBVideoPH = ceafatosteerhub;
        defaultCEAFAVideoPH = gatetoceafa;
    } 
    else if (buildingName === 'CIT') {
        defaultCEAFAVideoPH = cittoceafa;
        defaultCICSVideoPH = cittocics;
        defaultGYMVideoPH = cittogym;
        defaultRGRVideoPH = cittogym;
        defaultSSCVideoPH = cittossc;
        defaultSTEERHUBVideoPH = cittosteerhub;
        defaultCITVideoPH = gatetocit;
    } 
    else if (buildingName === 'GYM') {
        defaultCEAFAVideoPH = gymtoceafa;
        defaultCICSVideoPH = gymtocics;
        defaultCITVideoPH = gymtocit;
        defaultRGRVideoPH = gymtorgr;
        defaultSSCVideoPH = gymtossc;
        defaultSTEERHUBVideoPH = gymtosteerhub;
        defaultGYMVideoPH = gatetogym;
    } 
    else if (buildingName === 'RGR') {
        defaultCEAFAVideoPH = rgrtoceafa;
    defaultCICSVideoPH = rgrtocics
        defaultCITVideoPH = rgrtocit;
        defaultGYMVideoPH = rgrtogym;
        defaultSSCVideoPH = rgrtossc;
        defaultSTEERHUBVideoPH = rgrtosteerhub;
        defaultRGRVideoPH = gatetorgr;
    } 
    else if (buildingName === 'STUDENT SERVICES') {
        defaultCEAFAVideoPH = ssctoceafa;
        defaultCICSVideoPH = ssctocics;
        defaultCITVideoPH = ssctocit;
        defaultGYMVideoPH = ssctogym;
        defaultRGRVideoPH = ssctorgr;
        defaultSTEERHUBVideoPH = ssctosteerhub;
        defaultSSCVideoPH = gatetossc;
    } 
    else if (buildingName === 'STEERHUB') {
        defaultCEAFAVideoPH = steerhubtoceafa;
        defaultCICSVideoPH = steerhubtocics;
        defaultCITVideoPH = steerhubtocit;
        defaultGYMVideoPH = steerhubtogym;
        defaultRGRVideoPH = steerhubtorgr;
        defaultSSCVideoPH = steerhubtossc;
        defaultSTEERHUBVideoPH = gatetosteerhub;
    }
}

export default PathHandler;
