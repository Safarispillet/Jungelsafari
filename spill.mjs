//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(Velkommen);

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    Actions.Click(velkommen, () => {
        GaaTil(forside);
    })
}

function scene2() {
    new Blocks.Text("Dette er en ny scene, som du ser pga at du trykket ", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
}

let guide = null;

let elefantclick= 0;
let løvenclick= 0;
let giraffclick= 0;
let flodhestclick= 0;
let apeclick= 0;
let tigerclick= 0;
let guideclick= 0;


function forside() {
    
    // Å gjøre: Gi bedre navn til alle tingene.

    const elefant = new Blocks.Image("bilder/elefant.jpg", { x: 0, y: 0, width: 300, height: 300 });
    const tiger = new Blocks.Image("bilder/tiger.jpg", { x: 300, y: 0, width: 300, height: 300 });
    const giraff = new Blocks.Image("bilder/giraff.jpeg", { x: 600, y: 0, width: 300, height: 300 });
    const flodhest = new Blocks.Image("bilder/flodhest.jpg", { x: 0, y: 300, width: 300, height: 300 });
    const løven = new Blocks.Image("bilder/løven.jpg", { x: 300, y: 300, width: 300, height: 300 });
    const ape = new Blocks.Image("bilder/ape.jpg", { x: 600, y: 300, width: 300, height: 300 });




    guide = new Blocks.Image("bilder/guide.jpg", { x: 900, y: 200, width: 200, height: 300 });
    Actions.Click(guide, () => {
        const lydGuide = new Blocks.Sound("lyder/guide.m4a", { loop: false, auto: true });
        lydGuide.start()
    })

    Actions.Click(elefant, () => {
        elefantclick = elefantclick + 1;
        if(elefantclick === 1){
            let lydElefant = new Blocks.Sound("lyder/elefant1.m4a", { loop: false, auto: true });
            lydElefant.start();
        } else if (elefantclick === 2){
            let lydElefant = new Blocks.Sound("lyder/elefant2.m4a", { loop: false, auto: true });
            lydElefant.start();
            
        }  
    })

    Actions.Click(tiger, () => {
        tigerclick = tigerclick + 1;
        if(tigerclick === 1){
            let lydTiger = new Blocks.Sound("lyder/tiger1.m4a", { loop: false, auto: true });
            lydTiger.start();
        } else if (tigerclick === 2){
            let lydTiger = new Blocks.Sound("lyder/tiger2.m4a", { loop: false, auto: true });
            lydTiger.start();
        }  
    })

    Actions.Click(giraff, () => {
        giraffclick = giraffclick + 1;
        if(giraffclick === 1){
            let lydGiraff = new Blocks.Sound("lyder/giraff1.m4a", { loop: false, auto: true });
            lydGiraff.start();
        } else if (giraffclick === 2){
            let lydGiraff = new Blocks.Sound("lyder/giraff2.m4a", { loop: false, auto: true });
            lydGiraff.start();
        }  
    })
    Actions.Click(flodhest, () => {
        flodhestclick = flodhestclick + 1;
        if(flodhestclick === 1){
            let lydFlodhest = new Blocks.Sound("lyder/flodhest1.m4a", { loop: false, auto: true });
            lydFlodhest.start();
        } else if (flodhestclick === 2){
            let lydFlodhest = new Blocks.Sound("lyder/flodhest2.m4a", { loop: false, auto: true });
            lydFlodhest.start();
        }  
    })
    Actions.Click(løven, () => {
        løvenclick = løvenclick + 1;
        if(løvenclick === 1){
            let lydLøven = new Blocks.Sound("lyder/løven1.m4a", { loop: false, auto: true });
            lydLøven.start();
        } else if (løvenclick === 2){
            let lydLøven = new Blocks.Sound("lyder/løven2.m4a", { loop: false, auto: true });
            lydLøven.start();
        }  
    })
    Actions.Click(ape, () => {
        apeclick = apeclick + 1;
        if(apeclick === 1){
            let lydApe = new Blocks.Sound("lyder/ape1.m4a", { loop: false, auto: true });
            lydApe.start();
        } else if (apeclick === 2){
            let lydApe = new Blocks.Sound("lyder/ape2.m4a", { loop: false, auto: true });
            lydApe.start();
        }  
    })
    Actions.Click(guide, () => {
        guideclick = guideclick + 1;
        if(guideclick === 1){
            let lydGuide = new Blocks.Sound("lyder/guide1.m4a", { loop: false, auto: true });
            lydGuide.start();
        } else if (guideclick === 2){
            let lydGuide = new Blocks.Sound("lyder/guide2.m4a", { loop: false, auto: true });
            lydGuide.start();
        }  
    })



}
