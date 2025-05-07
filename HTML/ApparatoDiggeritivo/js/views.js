export {boccaView, ghiandoleView, golaView, fegatoView, stomacoView, pancreasView, cistifelleaView, intestinotView, intestinocView, appendiceView, anoView, fontiView}

function boccaView(){
    const fragment = document.createDocumentFragment();
    const boccaDiv = document.createElement('div');
    boccaDiv.className = 'bocca';

    const titoloBocca = document.createElement('h2');
    titoloBocca.textContent = "Anatomia e Funzioni della Bocca";  
    boccaDiv.appendChild(titoloBocca);

    let paragrafo = document.createElement('p');
    paragrafo.className = 'bocca';
    paragrafo.textContent = "La bocca, o cavità orale, è il primo organo del sistema digerente e svolge un ruolo cruciale nell'inizio del processo di digestione. È molto più di una semplice apertura; è una struttura complessa che ospita diverse componenti, ognuna con una funzione specifica.";
    boccaDiv.appendChild(paragrafo);

    let divImmagine = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.src = "./img/come-e-fatto-il-cavo-orale.jpg";
    divImmagine.appendChild(immagine);
    boccaDiv.appendChild(divImmagine);

    paragrafo = document.createElement('p');
    paragrafo.className = 'bocca';
    paragrafo.textContent = "I denti sono strutture dure e calcificate ancorate alle mascelle. La loro funzione principale è la digestione meccanica, ovvero la frantumazione del cibo in pezzi più piccoli attraverso la masticazione. Abbiamo diversi tipi di denti (incisivi, canini, premolari e molari), ciascuno progettato per svolgere un ruolo specifico nella masticazione.";
    boccaDiv.appendChild(paragrafo);

    divImmagine = document.createElement('div');
    immagine = document.createElement('img');
    immagine.src = "./img/sabbiatura-2_web1100x619.jpg";  
    divImmagine.appendChild(immagine);
    boccaDiv.appendChild(divImmagine);

    paragrafo = document.createElement('p');
    paragrafo.className = 'bocca';
    paragrafo.textContent = "La lingua è un organo muscolare molto mobile che svolge diverse funzioni. Innanzitutto, aiuta a mescolare il cibo, facilitando la masticazione e la formazione del bolo alimentare (la massa di cibo masticato e pronto per essere deglutito). La lingua contiene anche le papille gustative, che ci permettono di percepire i sapori. Inoltre, la lingua gioca un ruolo fondamentale nella deglutizione spingendo il bolo alimentare verso la faringe.";
    boccaDiv.appendChild(paragrafo);

    divImmagine = document.createElement('div');
    immagine = document.createElement('img');
    immagine.id = 'linguaImg';
    immagine.src = "./img/lingua-e-postura.webp";    
    divImmagine.appendChild(immagine);
    boccaDiv.appendChild(divImmagine);

    paragrafo = document.createElement('p');
    paragrafo.className = 'bocca';
    paragrafo.textContent = "Il palato è la struttura che costituisce il tetto della bocca e separa la cavità orale dalle cavità nasali. Si divide in due parti:";
    boccaDiv.appendChild(paragrafo);

    const lista = document.createElement('ul');
    lista.className = 'bocca';

    let listItem = document.createElement('li');
    listItem.className = 'bocca';
    listItem.textContent = "Palato duro: La parte anteriore, rigida, formata da ossa.";
    lista.appendChild(listItem);

    let divPalatoDuro = document.createElement('div');
    divPalatoDuro.className = 'bocca';
    lista.appendChild(divPalatoDuro);

    listItem = document.createElement('li');
    listItem.className = 'bocca';
    listItem.textContent = "Palato molle: La parte posteriore, più mobile, formata da muscoli e tessuto connettivo.";
    lista.appendChild(listItem);

    let divPalatoMolle = document.createElement('div');
    divPalatoMolle.className = 'bocca';
    lista.appendChild(divPalatoMolle);
    boccaDiv.appendChild(lista);

    paragrafo = document.createElement('p');
    paragrafo.className = 'bocca';
    paragrafo.textContent = "L'ugola è una piccola estensione conica del palato molle che pende nel retro della gola. Durante la deglutizione, l'ugola si muove verso l'alto insieme al palato molle per chiudere il passaggio verso le cavità nasali, impedendo al cibo e ai liquidi di risalirvi.";
    boccaDiv.appendChild(paragrafo);

    divImmagine = document.createElement('div');
    immagine = document.createElement('img');
    immagine.src = "./img/48804.webp";      
    divImmagine.appendChild(immagine);
    boccaDiv.appendChild(divImmagine);

    fragment.appendChild(boccaDiv);
    return fragment;
}

function ghiandoleView(){
    const fragment = document.createDocumentFragment();
    const ghiandoleDiv = document.createElement('div');
    fragment.appendChild(ghiandoleDiv);
    ghiandoleDiv.className = 'ghiandole';

    const titoloGhiandole = document.createElement('h2');
    titoloGhiandole.textContent = "Le Ghiandole Salivari";  
    ghiandoleDiv.appendChild(titoloGhiandole);

    let paragrafo = document.createElement('p');
    paragrafo.className = 'ghiandole';
    paragrafo.id = 'ghiandoleP1';
    paragrafo.textContent = "Le ghiandole salivari sono un gruppo di ghiandole esocrine situate nella bocca e nella gola, fondamentali per la produzione di saliva. Questo fluido complesso è essenziale non solo per avviare il processo digestivo, ma anche per mantenere la salute del cavo orale. La saliva lubrifica il cibo, facilitando la masticazione e la deglutizione, e contiene enzimi che iniziano la digestione chimica dei carboidrati.";
    ghiandoleDiv.appendChild(paragrafo);

    let divImmagine = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.id = 'ghiandoleImg';
    immagine.src = "./img/Illu_quiz_hn_02.jpg";
    divImmagine.appendChild(immagine);
    ghiandoleDiv.appendChild(divImmagine);

    paragrafo = document.createElement('p');
    paragrafo.className = 'ghiandole';
    paragrafo.textContent = "Le ghiandole parotidi sono le più grandi delle ghiandole salivari. Si trovano davanti e sotto le orecchie. Secernono principalmente saliva sierosa, che è ricca di enzimi digestivi, in particolare l'amilasi salivare (ptialina), che avvia la digestione dei carboidrati.";
    ghiandoleDiv.appendChild(paragrafo);

    paragrafo = document.createElement('p');
    paragrafo.className = 'ghiandole';
    paragrafo.textContent = "Le ghiandole sottomandibolari sono situate sotto la mascella, nella parte posteriore della bocca. Producono una saliva mista, composta sia da componenti sierose (acquose) che mucose. Contribuiscono in modo significativo al volume totale di saliva prodotta.";
    ghiandoleDiv.appendChild(paragrafo);

    paragrafo = document.createElement('p');
    paragrafo.className = 'ghiandole';
    paragrafo.textContent = "Le ghiandole sublinguali sono le più piccole delle tre ghiandole salivari maggiori. Sono situate sotto la lingua, sul pavimento della bocca. Secernono principalmente una saliva mucosa, più densa e viscosa, particolarmente utile per la lubrificazione.";
    ghiandoleDiv.appendChild(paragrafo);

    paragrafo = document.createElement('p');
    paragrafo.className = 'ghiandole';
    paragrafo.textContent = "Oltre a queste tre paia di ghiandole salivari maggiori, sono presenti anche numerose ghiandole salivari minori, distribuite in tutta la mucosa orale, che contribuiscono anch'esse alla produzione di saliva.";
    ghiandoleDiv.appendChild(paragrafo);

    return fragment;
}

function golaView(){
    const fragment = document.createDocumentFragment();
    const golaDiv = document.createElement('div');
    golaDiv.className = 'gola';

    const titoloGola = document.createElement('h2');
    titoloGola.textContent = "Anatomia e Funzioni della Gola"; 
    golaDiv.appendChild(titoloGola);

    let paragrafo = document.createElement('p');
    paragrafo.className = 'gola';
    paragrafo.id = 'golaIntro';
    paragrafo.textContent = "La gola, pur non essendo un organo digestivo in senso stretto, svolge un ruolo cruciale nel processo di digestione. Anatomicamente, è un crocevia complesso che mette in comunicazione sia l'apparato digerente che quello respiratorio. Le sue componenti principali coinvolte nella digestione sono:";
    golaDiv.appendChild(paragrafo);

    paragrafo = document.createElement('p');
    paragrafo.className = 'gola';
    paragrafo.textContent = "La faringe è un condotto muscolare che si estende dalla base del cranio all'esofago, diviso in tre parti: la nasofaringe (parte superiore, dietro le cavità nasali), l'orofaringe (parte centrale, dietro la cavità orale) e la laringofaringe (parte inferiore, che si apre nell'esofago). Durante la deglutizione, si contrae per spingere il cibo verso l'esofago.";
    golaDiv.appendChild(paragrafo);

    let divImmagine = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.src = "./img/faringe-suddivisioni-orig.avif"; 
    divImmagine.appendChild(immagine);
    golaDiv.appendChild(divImmagine);

    paragrafo = document.createElement('p');
    paragrafo.className = 'gola';
    paragrafo.textContent = "L'epiglottide, una struttura cartilaginea sopra la laringe, si solleva per permettere il passaggio dell'aria durante la respirazione e si abbassa per chiudere la laringe durante la deglutizione, deviando il cibo verso l'esofago e prevenendo l'aspirazione.";
    golaDiv.appendChild(paragrafo);

    divImmagine = document.createElement('div');
    immagine = document.createElement('img');
    immagine.src = "./img/medicina-online-dove-si-trova-epiglottide-funzioni-cibo-aria-apparato-digerente-respiratorio-gola-faringe-laringe-immagini-corde-vocali-endoscopia.webp";  // Assicurati che il percorso sia corretto
    divImmagine.appendChild(immagine);
    golaDiv.appendChild(divImmagine);

    paragrafo = document.createElement('p');
    paragrafo.className = 'gola';
    paragrafo.textContent = "L'esofago è un tubo muscolare lungo circa 25-30 cm che collega la faringe allo stomaco, trasportando il cibo attraverso contrazioni muscolari chiamate peristalsi. Non avviene digestione significativa nell'esofago, che funge solo da condotto di transito.";
    golaDiv.appendChild(paragrafo);

    divImmagine = document.createElement('div');
    immagine = document.createElement('img');
    immagine.src = "./img/fasi-della-deglutizione-orig.avif"; 
    divImmagine.appendChild(immagine);
    golaDiv.appendChild(divImmagine);

    fragment.appendChild(golaDiv);
    return fragment;
}

function fegatoView(){
    const fragment = document.createDocumentFragment();
    const fegatoDiv = document.createElement('div');
    fegatoDiv.className = 'fegato';

    let section = document.createElement('section');

    let h2 = document.createElement('h2');
    h2.className = 'fegato';
    h2.textContent = 'Cos\'è il fegato?';
    section.appendChild(h2);

    let p = document.createElement('p');
    p.className = 'fegato';
    p.textContent = 'Il fegato è il più grande organo interno del corpo umano e si trova nella parte superiore destra dell\'addome. Pesa circa 1,5 kg ed è fondamentale per il metabolismo.';
    section.appendChild(p);

    let divImmagine = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.src = "./img/fegato.jpg";
    divImmagine.appendChild(immagine);
    section.appendChild(divImmagine);

    fegatoDiv.appendChild(section);


    section = document.createElement('section');
    h2 = document.createElement('h2');
    h2.className = 'fegato';
    h2.textContent = 'Funzioni principali';
    section.appendChild(h2);

    let sectionFunzioni = document.createElement('section');
    let h3 = document.createElement('h3');
    h3.className = 'fegato';
    h3.textContent = 'Produzione della bile';
    sectionFunzioni.appendChild(h3);
    p = document.createElement('p');
    p.className = 'fegato';
    p.textContent = 'Il fegato produce bile, una sostanza verde-giallastra che aiuta a digerire i grassi. La bile viene immagazzinata nella cistifellea e rilasciata nel duodeno durante la digestione.';
    sectionFunzioni.appendChild(p);
    section.appendChild(sectionFunzioni);

    sectionFunzioni = document.createElement('section');
    h3 = document.createElement('h3');
    h3.className = 'fegato';
    h3.textContent = 'Metabolismo dei nutrienti';
    sectionFunzioni.appendChild(h3);
    p = document.createElement('p');
    p.className = 'fegato';
    p.textContent = 'Il fegato trasforma i nutrienti assorbiti dall\'intestino (come zuccheri, proteine e grassi) per renderli utilizzabili dal corpo. Ad esempio, converte il glucosio in glicogeno, una forma di riserva energetica.';
    sectionFunzioni.appendChild(p);
    section.appendChild(sectionFunzioni);

    sectionFunzioni = document.createElement('section');
    h3 = document.createElement('h3');
    h3.className = 'fegato';
    h3.textContent = 'Detossificazione';
    sectionFunzioni.appendChild(h3);
    p = document.createElement('p');
    p.className = 'fegato';
    p.textContent = 'Il fegato filtra il sangue e neutralizza sostanze tossiche, come alcol, farmaci o sostanze di scarto.';
    sectionFunzioni.appendChild(p);
    section.appendChild(sectionFunzioni);

    sectionFunzioni = document.createElement('section');
    h3 = document.createElement('h3');
    h3.className = 'fegato';
    h3.textContent = 'Produzione di proteine del sangue';
    sectionFunzioni.appendChild(h3);
    p = document.createElement('p');
    p.className = 'fegato';
    p.textContent = 'Produce proteine importanti come l\'albumina (che regola i liquidi nel sangue) e fattori della coagulazione.';
    sectionFunzioni.appendChild(p);
    section.appendChild(sectionFunzioni);

    fegatoDiv.appendChild(section);

    fragment.appendChild(fegatoDiv);

    return fragment;
}

function stomacoView(){
    const fragment = document.createDocumentFragment();
    const stomacoDiv = document.createElement('div');
    stomacoDiv.className = 'stomaco';

    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.className = 'stomaco';
    h2.textContent = 'Cos’è lo stomaco?';
    section.appendChild(h2);
    let p = document.createElement('p');
    p.className = 'stomaco';
    p.textContent = 'Lo stomaco è un organo a forma di sacco, situato tra l’esofago e l’intestino tenue. È un componente fondamentale dell’apparato digerente.';
    section.appendChild(p);
    stomacoDiv.appendChild(section);

    let divImmagine = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.src = "./img/stomaco_02.jpg";
    immagine.id = "stomacoImg";
    divImmagine.appendChild(immagine);
    stomacoDiv.appendChild(divImmagine);

    section = document.createElement('section');
    h2 = document.createElement('h2');
    h2.className = 'stomaco';
    h2.textContent = 'Funzioni principali';
    section.appendChild(h2);

    let sectionFunzioni = document.createElement('section');
    let h3 = document.createElement('h3');
    h3.className = 'stomaco';
    h3.textContent = 'Digestione meccanica e chimica';
    sectionFunzioni.appendChild(h3);
    p = document.createElement('p');
    p.className = 'stomaco';
    p.textContent = 'Lo stomaco mescola il cibo grazie alle sue contrazioni muscolari.';
    sectionFunzioni.appendChild(p);
    p = document.createElement('p');
    p.className = 'stomaco';
    p.textContent = 'Secreta succhi gastrici contenenti acido cloridrico (HCl) e pepsina, un enzima che inizia la digestione delle proteine.';
    sectionFunzioni.appendChild(p);
    section.appendChild(sectionFunzioni);

    sectionFunzioni = document.createElement('section');
    h3 = document.createElement('h3');
    h3.className = 'stomaco';
    h3.textContent = 'Difesa contro i batteri';
    sectionFunzioni.appendChild(h3);
    p = document.createElement('p');
    p.className = 'stomaco';
    p.textContent = 'L’acido cloridrico distrugge la maggior parte dei microrganismi presenti nel cibo.';
    sectionFunzioni.appendChild(p);
    section.appendChild(sectionFunzioni);

    sectionFunzioni = document.createElement('section');
    h3 = document.createElement('h3');
    h3.className = 'stomaco';
    h3.textContent = 'Produzione di muco';
    sectionFunzioni.appendChild(h3);
    p = document.createElement('p');
    p.className = 'stomaco';
    p.textContent = 'Le pareti dello stomaco producono muco protettivo, che impedisce all’acido di danneggiare i tessuti interni.';
    sectionFunzioni.appendChild(p);
    section.appendChild(sectionFunzioni);

    sectionFunzioni = document.createElement('section');
    h3 = document.createElement('h3');
    h3.className = 'stomaco';
    h3.textContent = 'Controllo del rilascio del cibo';
    sectionFunzioni.appendChild(h3);
    p = document.createElement('p');
    p.className = 'stomaco';
    p.textContent = 'Il cibo digerito (chiamato chimo) viene rilasciato lentamente nell’intestino tenue tramite il piloro, per proseguire la digestione e l’assorbimento.';
    sectionFunzioni.appendChild(p);
    section.appendChild(sectionFunzioni);

    stomacoDiv.appendChild(section);

    fragment.appendChild(stomacoDiv);

    return fragment;
}

function pancreasView(){
    const fragment = document.createDocumentFragment();
            const pancreasDiv = document.createElement('div');
            pancreasDiv.className = 'pancreas';

            let section = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.className = 'pancreas';
            h2.textContent = 'Cos’è il pancreas?';
            section.appendChild(h2);
            let p = document.createElement('p');
            p.className = 'pancreas';
            p.textContent = 'Il pancreas è una ghiandola lunga circa 15 cm, situata dietro lo stomaco. Svolge due funzioni principali: digestiva (esocrina) e ormonale (endocrina).';
            section.appendChild(p);
            let divImmagine = document.createElement('div');
            let immagine = document.createElement('img');
            immagine.src = "./img/Detail__FocusFillWyIwLjAwIiwiMC4wMCIsNzIwLDUxNF0.png";
            divImmagine.appendChild(immagine);
            section.appendChild(divImmagine);
            pancreasDiv.appendChild(section);

            section = document.createElement('section');
            h2 = document.createElement('h2');
            h2.className = 'pancreas';
            h2.textContent = 'Funzione digestiva (esocrina)';
            section.appendChild(h2);
            p = document.createElement('p');
            p.className = 'pancreas';
            p.textContent = 'Il pancreas produce succo pancreatico, che contiene enzimi fondamentali per la digestione:';
            section.appendChild(p);
            let ul = document.createElement('ul');
            ul.className = 'pancreas';
            let li = document.createElement('li');
            li.className = 'pancreas';
            li.textContent = 'Amilasi: digerisce i carboidrati.';
            ul.appendChild(li);
            li = document.createElement('li');
            li.className = 'pancreas';
            li.textContent = 'Lipasi: digerisce i grassi.';
            ul.appendChild(li);
            li = document.createElement('li');
            li.className = 'pancreas';
            li.textContent = 'Tripsina e chimotripsina: digeriscono le proteine.';
            ul.appendChild(li);
            section.appendChild(ul);
            p = document.createElement('p');
            p.className = 'pancreas';
            p.textContent = 'Questi enzimi vengono secreti nel duodeno (prima parte dell’intestino tenue) attraverso il dotto pancreatico, dove completano la digestione del cibo.';
            section.appendChild(p);
            pancreasDiv.appendChild(section);

            section = document.createElement('section');
            h2 = document.createElement('h2');
            h2.className = 'pancreas';
            h2.textContent = 'Funzione endocrina';
            section.appendChild(h2);
            p = document.createElement('p');
            p.className = 'pancreas';
            p.textContent = 'Il pancreas produce anche ormoni che regolano la glicemia (livello di zucchero nel sangue):';
            section.appendChild(p);
            ul = document.createElement('ul');
            ul.className = 'pancreas';
            li = document.createElement('li');
            li.className = 'pancreas';
            li.textContent = 'Insulina: abbassa la glicemia.';
            ul.appendChild(li);
            li = document.createElement('li');
            li.className = 'pancreas';
            li.textContent = 'Glucagone: la aumenta.';
            ul.appendChild(li);
            section.appendChild(ul);
            p = document.createElement('p');
            p.className = 'pancreas';
            p.textContent = 'Questi ormoni sono prodotti dalle isole di Langerhans, piccole aree specializzate all’interno del pancreas.';
            section.appendChild(p);
            pancreasDiv.appendChild(section);

            fragment.appendChild(pancreasDiv);
            return fragment;
}

function cistifelleaView(){
    const fragment = document.createDocumentFragment();
    const cistifelleaDiv = document.createElement('div');
    cistifelleaDiv.className = 'cistifellea';

    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.className = 'cistifellea';
    h2.textContent = 'CISTIFELLEA (O VESCICA BILIARE)';
    section.appendChild(h2);
    let p = document.createElement('p');
    p.className = 'cistifellea';
    p.innerHTML = 'Anatomia e Funzione:<br>La cistifellea è un piccolo organo a forma di sacchetto, lungo circa 7–10 cm, situato sotto il fegato, nella parte superiore destra dell’addome.<br>Funzione principale: immagazzina e concentra la bile, un liquido prodotto dal fegato utile per la digestione dei grassi.';
    section.appendChild(p);
    let divImg = document.createElement('div');
    let img = document.createElement('img');
    img.id = "cistifelleaImg";
    img.src = "./img/250px-2425_Gallbladder-it.jpg";
    divImg.appendChild(img);
    section.appendChild(divImg);
    cistifelleaDiv.appendChild(section);

    section = document.createElement('section');
    let h3 = document.createElement('h3');
    h3.className = 'cistifellea';
    h3.textContent = 'Quando ingeriamo cibi grassi...';
    section.appendChild(h3);
    p = document.createElement('p');
    p.className = 'cistifellea';
    p.innerHTML = 'Quando ingeriamo cibi grassi, la cistifellea si contrae e rilascia la bile nel duodeno (prima parte dell’intestino tenue) attraverso il dotto coledoco.<br>La bile emulsiona i grassi, rendendoli più facili da digerire e assorbire.';
    section.appendChild(p);
    cistifelleaDiv.appendChild(section);

    section = document.createElement('section');
    h3 = document.createElement('h3');
    h3.className = 'cistifellea';
    h3.textContent = 'Patologie comuni';
    section.appendChild(h3);
    p = document.createElement('p');
    p.className = 'cistifellea';
    p.innerHTML = 'Calcoli biliari (colelitiasi): piccoli depositi solidi che possono bloccare i dotti e causare dolore (colica biliare).<br>Colecistite: infiammazione della cistifellea, spesso legata ai calcoli.<br>Asportazione (colecistectomia): è possibile vivere senza cistifellea; la bile fluirà direttamente dal fegato all’intestino.';
    section.appendChild(p);
    cistifelleaDiv.appendChild(section);

    fragment.appendChild(cistifelleaDiv);
    return fragment;
}

function intestinotView(){
    const fragment = document.createDocumentFragment();
    const intestinoTDiv = document.createElement('div');
    intestinoTDiv.className = 'intestinoT';

    let sezioneIntestino = document.createElement('section');
    let h2Intestino = document.createElement('h2');
    h2Intestino.className = 'intestinoT';
    h2Intestino.textContent = "L'Intestino Tenue";
    sezioneIntestino.appendChild(h2Intestino);
    let pIntestino = document.createElement('p');
    pIntestino.className = 'intestinoT';
    pIntestino.textContent = "L'intestino tenue è un tubo lungo circa sei-sette metri, stretto, ma incredibilmente efficiente. È qui che avviene la maggior parte della digestione e l'assorbimento dei nutrienti che ricaviamo dal cibo.";
    sezioneIntestino.appendChild(pIntestino);

    let divImmagine = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.src = "./img/componenti-intestino-tenue.png";
    divImmagine.appendChild(immagine);
    sezioneIntestino.appendChild(divImmagine);

    pIntestino = document.createElement('p');
    pIntestino.className = 'intestinoT';
    pIntestino.textContent = "Possiamo dividerlo in tre sezioni principali:";
    sezioneIntestino.appendChild(pIntestino);

    let ulIntestino = document.createElement('ul');
    ulIntestino.className = 'intestinoT';
    let liIntestino = document.createElement('li');
    liIntestino.className = 'intestinoT';
    liIntestino.textContent = "Duodeno";
    ulIntestino.appendChild(liIntestino);
    liIntestino = document.createElement('li');
    liIntestino.className = 'intestinoT';
    liIntestino.textContent = "Digiuno";
    ulIntestino.appendChild(liIntestino);
    liIntestino = document.createElement('li');
    liIntestino.className = 'intestinoT';
    liIntestino.textContent = "Ileo";
    ulIntestino.appendChild(liIntestino);
    sezioneIntestino.appendChild(ulIntestino);
    intestinoTDiv.appendChild(sezioneIntestino);

    let sezioneDuodeno = document.createElement('section');
    let h2Duodeno = document.createElement('h2');
    h2Duodeno.className = 'intestinoT';
    h2Duodeno.textContent = "Duodeno";
    sezioneDuodeno.appendChild(h2Duodeno);
    let pDuodeno = document.createElement('p');
    pDuodeno.className = 'intestinoT';
    pDuodeno.textContent = "È il primo tratto, a forma di \"C\", che riceve il cibo parzialmente digerito dallo stomaco (il chimo). Qui entrano in gioco gli enzimi digestivi prodotti dal pancreas e la bile rilasciata dal fegato e dalla cistifellea. Pensa a un vero e proprio \"laboratorio chimico\" dove le proteine, i carboidrati e i grassi iniziano a essere scomposti ulteriormente.";
    sezioneDuodeno.appendChild(pDuodeno);
    intestinoTDiv.appendChild(sezioneDuodeno);

    let sezioneDigiuno = document.createElement('section');
    let h2Digiuno = document.createElement('h2');
    h2Digiuno.className = 'intestinoT';
    h2Digiuno.textContent = "Digiuno";
    sezioneDigiuno.appendChild(h2Digiuno);
    let pDigiuno = document.createElement('p');
    pDigiuno.className = 'intestinoT';
    pDigiuno.textContent = "Questa è la sezione centrale, dove continua la digestione e inizia l'assorbimento vero e proprio dei nutrienti. Le pareti interne del digiuno sono ricoperte da minuscole pieghe chiamate villi intestinali. Immagina delle piccole dita che aumentano enormemente la superficie di contatto per assorbire il più possibile le sostanze nutritive.";
    sezioneDigiuno.appendChild(pDigiuno);
    intestinoTDiv.appendChild(sezioneDigiuno);

    let sezioneIleo = document.createElement('section');
    let h2Ileo = document.createElement('h2');
    h2Ileo.className = 'intestinoT';
    h2Ileo.textContent = "Ileo";
    sezioneIleo.appendChild(h2Ileo);
    let pIleo = document.createElement('p');
    pIleo.className = 'intestinoT';
    pIleo.textContent = "L'ileo è l'ultima parte dell'intestino tenue. Qui continua l'assorbimento di alcuni nutrienti, come la vitamina B12 e i sali biliari. L'ileo si connette all'intestino crasso attraverso una valvola chiamata valvola ileocecale, che impedisce al contenuto dell'intestino crasso di tornare indietro.";
    sezioneIleo.appendChild(pIleo);
    intestinoTDiv.appendChild(sezioneIleo);

    fragment.appendChild(intestinoTDiv);
    return fragment;
}

function intestinocView(){
    const fragment = document.createDocumentFragment();
    const intestinoCDiv = document.createElement('div');
    intestinoCDiv.className = 'intestinoC';

    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.className = 'intestinoC';
    h2.textContent = 'INTESTINO CRASSO';
    section.appendChild(h2);
    let h3 = document.createElement('h3');
    h3.className = 'intestinoC';
    h3.textContent = 'Struttura e Anatomia';
    section.appendChild(h3);
    let p = document.createElement('p');
    p.className = 'intestinoC';
    p.textContent = 'L’intestino crasso è l’ultima parte del tratto digerente umano. Misura circa 1,5 metri di lunghezza e ha un diametro maggiore rispetto all’intestino tenue. È diviso in diverse sezioni:';
    section.appendChild(p);
    let divImmagine = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.src = "./img/colon.avif";
    divImmagine.appendChild(immagine);
    section.appendChild(divImmagine);
    let ul = document.createElement('ul');
    ul.className = 'intestinoC';
    let li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Cieco: prima parte, a cui è attaccata l’appendice vermiforme.';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Colon: parte principale, suddiviso in:';
    let ulColon = document.createElement('ul');
    ulColon.className = 'intestinoC';
    let liColon = document.createElement('li');
    liColon.className = 'intestinoC';
    liColon.textContent = 'Colon ascendente (sale lungo il lato destro dell’addome)';
    ulColon.appendChild(liColon);
    liColon = document.createElement('li');
    liColon.className = 'intestinoC';
    liColon.textContent = 'Colon trasverso (attraversa l’addome da destra a sinistra)';
    ulColon.appendChild(liColon);
    liColon = document.createElement('li');
    liColon.className = 'intestinoC';
    liColon.textContent = 'Colon discendente (scende lungo il lato sinistro)';
    ulColon.appendChild(liColon);
    liColon = document.createElement('li');
    liColon.className = 'intestinoC';
    liColon.textContent = 'Colon sigma o sigmoideo (forma una curva a "S")';
    ulColon.appendChild(liColon);
    li.appendChild(ulColon);
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Retto: porzione finale, termina con il canale anale.';
    ul.appendChild(li);
    section.appendChild(ul);
    p = document.createElement('p');
    p.className = 'intestinoC';
    p.textContent = 'La parete dell’intestino crasso è composta da muscolatura liscia, mucosa e sottomucosa. A differenza del tenue, non ha villi, ma presenta numerose cripte intestinali.';
    section.appendChild(p);
    intestinoCDiv.appendChild(section);

    section = document.createElement('section');
    h2 = document.createElement('h2');
    h2.className = 'intestinoC';
    h2.textContent = 'Funzioni e Fisiologia';
    section.appendChild(h2);
    p = document.createElement('p');
    p.className = 'intestinoC';
    p.textContent = 'Le funzioni principali dell’intestino crasso sono:';
    section.appendChild(p);
    ul = document.createElement('ul');
    ul.className = 'intestinoC';
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Assorbimento di acqua e sali minerali: il contenuto del tenue arriva liquido, ma nel colon diventa sempre più solido fino a diventare feci.';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Formazione e trasporto delle feci.';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Fermentazione batterica: la flora batterica (microbiota intestinale) degrada residui non digeriti, producendo gas e alcune vitamine (es. vitamina K, alcune vitamine del gruppo B).';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Difesa immunitaria: grazie alla presenza di cellule immunitarie e alla barriera mucosa.';
    ul.appendChild(li);
    section.appendChild(ul);
    intestinoCDiv.appendChild(section);

    section = document.createElement('section');
    h2 = document.createElement('h2');
    h2.className = 'intestinoC';
    h2.textContent = 'Disturbi comuni';
    section.appendChild(h2);
    ul = document.createElement('ul');
    ul.className = 'intestinoC';
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Stitichezza';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Diarrea';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Colite';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'intestinoC';
    li.textContent = 'Morbo di Crohn o rettocolite ulcerosa (malattie infiammatorie croniche intestinali)';
    ul.appendChild(li);
    section.appendChild(ul);
    intestinoCDiv.appendChild(section);

    fragment.appendChild(intestinoCDiv);
    return fragment;
}

function appendiceView(){
    const fragment = document.createDocumentFragment();
    const appendiceDiv = document.createElement('div');
    appendiceDiv.className = 'appendice';

    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.className = 'appendice';
    h2.textContent = "L'Appendice";
    section.appendChild(h2);
    let p = document.createElement('p');
    p.className = 'appendice';
    p.textContent = "L'appendice è un piccolo organo a forma di dito collegato all'intestino crasso. Sebbene per lungo tempo sia stata considerata un residuo evolutivo, evidenze recenti suggeriscono un suo possibile ruolo nella riserva di batteri intestinali benefici e nella funzione immunitaria. La sua infiammazione, l'appendicite, è una condizione comune che richiede un intervento chirurgico tempestivo.";
    section.appendChild(p);
    let divImmagine = document.createElement('div');
    let immagine = document.createElement('img');
    immagine.src = "./img/infiammazione-dell-appendice-78628008.webp";
    immagine.id = "appendiceImg";
    divImmagine.appendChild(immagine);
    section.appendChild(divImmagine);
    appendiceDiv.appendChild(section);

    section = document.createElement('section');
    let h3 = document.createElement('h3');
    h3.className = 'appendice';
    h3.textContent = "L'Appendicite";
    section.appendChild(h3);
    p = document.createElement('p');
    p.className = 'appendice';
    p.textContent = "Il problema più comune associato all'appendice è l'appendicite, un'infiammazione acuta dell'organo. Questa condizione si verifica spesso quando l'appendice viene ostruita da feci, un corpo estraneo o, più raramente, da un tumore. L'ostruzione porta a un aumento della pressione interna, proliferazione batterica e infiammazione della parete appendicolare.";
    section.appendChild(p);
    p = document.createElement('p');
    p.className = 'appendice';
    p.textContent = "I sintomi tipici dell'appendicite includono:";
    section.appendChild(p);
    let ul = document.createElement('ul');
    ul.className = 'appendice';
    let li = document.createElement('li');
    li.className = 'appendice';
    li.textContent = 'Dolore che inizia spesso intorno all\'ombelico e si sposta gradualmente nel quadrante inferiore destro dell\'addome (il cosiddetto "punto di McBurney").';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'appendice';
    li.textContent = 'Perdita di appetito.';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'appendice';
    li.textContent = 'Nausea e vomito.';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'appendice';
    li.textContent = 'Febbre.';
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'appendice';
    li.textContent = 'Dolore alla palpazione del quadrante inferiore destro.';
    ul.appendChild(li);
    section.appendChild(ul);
    p = document.createElement('p');
    p.className = 'appendice';
    p.textContent = "L'appendicite è un'emergenza medica che richiede un intervento chirurgico (appendicectomia) per rimuovere l'appendice infiammata. Se non trattata, l'appendice può perforare, causando una peritonite (un'infezione grave della cavità addominale) che può essere potenzialmente letale.";
    section.appendChild(p);
    appendiceDiv.appendChild(section);

    fragment.appendChild(appendiceDiv);
    return fragment;
}

function anoView(){
    const fragment = document.createDocumentFragment();
    const anoDiv = document.createElement('div');
    anoDiv.className = 'ano';

    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.className = 'ano';
    h2.textContent = "L'Ano";
    section.appendChild(h2);
    let p = document.createElement('p');
    p.className = 'ano';
    p.textContent = "L'ano è una struttura complessa con un ruolo fondamentale nell'eliminazione dei rifiuti corporei e nel mantenimento della continenza, controllata da muscoli, nervi e vasi sanguigni finemente coordinati.";
    section.appendChild(p);
    let h3 = document.createElement('h3');
    h3.className = 'ano';
    h3.textContent = "Sfinteri Anali:";
    section.appendChild(h3);
    p = document.createElement('p');
    p.className = 'ano';
    p.textContent = "La funzionalità dell'ano è principalmente controllata da due anelli muscolari chiamati sfinteri anali:";
    section.appendChild(p);
    let ul = document.createElement('ul');
    ul.className = 'ano';
    let li = document.createElement('li');
    li.className = 'ano';
    li.textContent = "Sfintere anale interno: Questo muscolo liscio è involontario, il che significa che non possiamo controllarlo consapevolmente.";
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'ano';
    li.textContent = "Sfintere anale esterno: Questo muscolo scheletrico è volontario, permettendoci di controllare consapevolmente il momento della defecazione.";
    ul.appendChild(li);
    section.appendChild(ul);
    p = document.createElement('p');
    p.className = 'ano';
    p.textContent = "Continenza: Gli sfinteri anali, insieme al pavimento pelvico, svolgono un ruolo cruciale nel mantenere la continenza fecale, impedendo la fuoriuscita involontaria di feci e gas.";
    section.appendChild(p);
    h3 = document.createElement('h3');
    h3.className = 'ano';
    h3.textContent = "Patologie comuni:";
    section.appendChild(h3);
    ul = document.createElement('ul');
    ul.className = 'ano';
    li = document.createElement('li');
    li.className = 'ano';
    li.textContent = "Emorroidi: Gonfiore e infiammazione delle vene del plesso emorroidario.";
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'ano';
    li.textContent = "Ragadi anali: Piccole lacerazioni nella mucosa del canale anale, spesso causate dal passaggio di feci dure.";
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'ano';
    li.textContent = "Ascessi e fistole anali: Raccolte di pus e tunnel anomali che si formano vicino all'ano.";
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'ano';
    li.textContent = "Incontinenza fecale: Difficoltà nel controllare l'evacuazione delle feci.";
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'ano';
    li.textContent = "Prolasso rettale: Protrusione di una parte del retto attraverso l'ano.";
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'ano';
    li.textContent = "Tumori anali: Crescite anomale di cellule nel canale anale o nella cute perianale.";
    ul.appendChild(li);
    section.appendChild(ul);
    anoDiv.appendChild(section);

    fragment.appendChild(anoDiv);
    
    return fragment;
}

function fontiView(){
    const fragment = document.createDocumentFragment();
    const fontiDiv = document.createElement('div');
    fontiDiv.className = 'fonti';

    const titolo = document.createElement('h1');
    titolo.textContent = 'Fonti del Sito e del Gioco';
    fontiDiv.appendChild(titolo);

    const lista = document.createElement('ul');
    const fonti = [
        { nome: 'Manuale MSD (Versione per i pazienti)', url: 'https://www.msdmanuals.com/it/casa' },
        { nome: 'Humanitas Medical Center', url: 'https://www.humanitas.it/' },
        { nome: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
        { nome: 'Treccani', url: 'https://www.treccani.it/enciclopedia/' },
        { nome: 'Wikipedia', url: 'https://it.wikipedia.org/wiki/' },
        { nome: 'Federazione Nazionale degli Ordini dei Medici Chirurghi e degli Odontoiatri (FNOMCeO)', url: 'https://portale.fnomceo.it/' },
        { nome: 'Istituto Superiore di Sanità (ISS)', url: 'https://www.iss.it/' },
        { nome: 'My Personal Trainer', url: 'https://www.my-personaltrainer.it/' },
        { nome: 'Zanichelli "Scopri la Biologia" (libro)' }
    ];

    fonti.forEach(fonte => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = fonte.url;
        link.textContent = fonte.url;
        listItem.textContent = fonte.nome + ": ";
        listItem.appendChild(link);
        lista.appendChild(listItem);
    });
    fontiDiv.appendChild(lista);

    fragment.appendChild(fontiDiv);
    return fragment;
}