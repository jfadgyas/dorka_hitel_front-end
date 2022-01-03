export const PageDetails = [
    {
        loanType: 'personal',
        link: '/szemelyi-kolcson',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'Személyi kölcsön'
                },
                icon: 'personal',
                desc: {
                    class: 'page__desc',
                    text: 'Szabad felhasználású kölcsön, ingatlanfedezet nélkül. Akár 10 millió Ft hitelösszeg. Egyszerűbb és gyorsabb igénylés, emiatt viszont a kamatok magasabbak lehetnek. 3-5 napon belül érkezik a számlára az összeg.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Igényléshez szükséges dokumentumok'
                },
                icon: 'description',
                list: [
                    'Kártya formátumú jogosítvány vagy személyi igazolvány, lakcímkártya, adókártya',
                    'Utolsó 3 havi bankszámlakivonat',
                    'Munkáltatói igazolás banki formanyomtatványon'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Mekkora összeg igényelhető és milyen futamidővel?'
                },
                icon: 'clock', //schedule-szemelyi
                desc: {
                    class: 'page__desc',
                    text: 'Maximum 10 millió Ft kölcsön, 1-8 éves futamidővel. JTM (jövedelemarányos törlesztési mutató) szabály: A havi törlesztő maximális összege 500 ezer Ft alatti nettó jövedelem esetén annak legfeljebb 50%-a lehet, 500 ezer Ft jövedelem felett annak 60%-a.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Termék jellemzők'
                },
                icon: 'settings',
                list: [
                    'Szabadfelhasználású',
                    'Ingatlan fedezet nélkül',
                    'Igazolt jövedelem szükséges',
                    'Kamata függ a kölcsönösszegtől, a hitel futamidejétől és a jövedelemtől',
                    'Kevesebb dokumentációt igényel',
                    'Akár online is igényelhető',
                    '3-5 nap alatt a számlán lehet a pénz'            
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Leggyakoribb célok'
                },
                icon: 'explore',
                list: [
                    'Autóvásárlás',
                    'Önerő lakáshitelhez',
                    'Esküvő',
                    'Gyermekvállalás',
                    'Pénzügyi nehézségek',
                    'Felújítás',
                    'Hitelkiváltás: korábban felvett személyi kölcsön lecserélhető kedvezőbb kamatozásúra, kedvezőbb törlesztőrészlettel'                
                ]
            },            
            {
                header: {
                    class: 'page__header',
                    text: 'Elfogadható jövedelmek'
                },
                icon: 'savings',
                list: [
                    'Alkalmazotti munkaviszonyból származó jövedelmek (pl. munkabér)',
                    'Vállalkozói jövedelmek (pl. KATA, EV, KFT, BT, stb.)',
                    'Nyugdíj (pl.öregségi, rokkant)',
                    'Szociális jövedelmek (pl. GYES, CSED, GYED, árvasági ellátás, járadékok)',
                    'Megbízási díj',
                    'Egyéb kiegészítő jövedelmek (pl. osztalék, bérbeadásból származó jövedelem)',
                    'Készpénzes jövedelem is, NAV jövedelemigazolással együtt'          
                ]
            }
        ]
    },
    {
        loanType: 'home',
        link: '/lakas',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'Lakáshitel'
                },
                icon: 'home',
                desc: {
                    class: 'page__desc',
                    text: 'Használt új építésű lakás vagy ház vásárlására, felújításra, építkezésre, hitelkiváltásra, vagy akár szabadon felhasználható hitel, ingatlan fedezettel.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Igényléshez szükséges dokumentumok'
                },
                icon: 'description',
                list: [
                    'Kártya formátumú jogosítvány vagy személyi igazolvány, lakcímkártya, adókártya',
                    'Utolsó 3 havi bankszámlakivonat',
                    'Munkáltatói igazolás banki formanyomtatványon',
                    'Vételi szándék nyilatkozat',
                    'Ingatlan alaprajz',
                    'Adás-vételi szerződés'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Hitelbírálati idő'
                },
                icon: 'clock',
                desc: {
                    class: 'page__desc',
                    text: 'Átlagosan 1-1,5 hónapot vesz igénybe a hitelügyintézés. Ha egyéb támogatások, kérelmek is társulnak hozzá, ez az idő hosszabb lehet.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Termék jellemzők'
                },
                icon: 'settings',
                list: [
                    'Ingatlanfedezetes hitel', 
                    'Kb. 1 - 100 millió Ft kölcsönösszeg', 
                    '1 - 30 éves választható futamidő',
                    'Kamatozása függ a felvett hitel összegétől, futamidejétől, és a jövedelmétől', 
                    'Választható kamatperiódus',
                    'Elréhető Minősített Fogyasztóbarát konstrukcióban is',
                    'Adóstárs, kezes bevonására is lehetőség van',
                    'Lehetőség van a hitelt elő- vagy végtörleszteni'            
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Leggyakoribb célok'
                },
                icon: 'explore',
                list: [
                    'Használt lakás vagy ház vásárlása',
                    'Új építésű lakás vagy ház vásárlása',
                    'Építkezés',
                    'Lakásfelújítás, korszerűsítés vagy bővítés',
                    'Hitelkiváltás',
                    'Szabad felhasználásra ingatlan fedezettel',
                    'Nyaraló, üdülő, telek vásárlás'               
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Mekkora önerőre van szükség?'
                },
                icon: 'savings',
                desc: {
                    class: 'page__desc',
                    text: 'Általában Budapesten és agglomerációban, megyeszékhelyeken 20% az elvárt minimum önerő, amivel rendelkezni kell már a lakáshitel igénylés előtt, vidéken, egyéb településeken pedig 30%. Ez egy 10M Ft-os lakáshitel esetén azt jelenti, hogy 2M Ft-tal rendelkezni kell valamilyen formában (készpénz, megtakarítás, lakástakarékpénztár). Önerő nélkül egy másik ingatlan bevonását fogják kérni pótfedezetként.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Elfogadható jövedelmek'
                },
                icon: 'price_check',
                list: [
                    'Alkalmazotti munkaviszonyból származó jövedelmek (pl. munkabér)',
                    'Vállalkozói jövedelmek (pl. KATA, EV, KFT, BT, stb.)', 
                    'Nyugdíj (pl.öregségi, rokkant)',
                    'Szociális jövedelmek (pl. GYES, CSED, GYED, árvasági ellátás, járadékok)',
                    'Megbízási díj',
                    'Egyéb kiegészítő jövedelmek (pl. osztalék, bérbeadásból származó jövedelem)',
                    'Készpénzes jövedelem is, NAV jövedelemigazolással együtt'        
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Elfogadható ingatlanfedezetek'
                },
                icon: 'holiday_village',
                desc: {
                    text: 'Magyarország területen lévő, magánszemély tulajdonában álló, per-, teher- és igénymentes, önállóan forgalomképes ingatlan. Fontos a fedezetül szolgáló ingatlan becsült forgalmi értéke, mivel a hitelösszeg nem haladhatja meg ennek 80%-át. Kisebb településeken ez a szám alacsonyabb lehet, megközelítőleg 60-70%.'
                }
            },
        ]
    },
    // {
    //     loanType: 'auto',
    //     details: []
    // },
    {
        loanType: 'baby',
        link: '/baba',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'Babaváró hitel'
                },
                icon: 'baby',
                desc: {
                    class: 'page__desc',
                    text: 'A babaváró hitel házasoknak szól, akik gyermeket terveznek. Maximálisan 10 millió Ft kamatmentes kölcsön, amely szabad felhasználású. Maximum 50.000 Ft havi törlesztőrészlet. A bankoknak 10 napjuk van a hiánytalanul benyújtott igénylés elbírálására, a folyósítás ezt követően gyorsan megtörténik.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Igényléshez szükséges dokumentumok'
                },
                icon: 'description',
                list: [
                    'Kártya formátumú jogosítvány vagy személyi igazolvány, lakcímkártya, adókártya',
                    'Utolsó 3 havi bankszámlakivonat',
                    'Munkáltatói igazolás banki formanyomtatványon',
                    '3 éves TB jogviszony (OEP igazolás), ami kormányhivataltól, járási hivataltól igényelhető',
                    'Házassági anyakönyvi kivonat'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Mekkora összeg igényelhető és milyen futamidővel?'
                },
                icon: 'clock',
                desc: {
                    class: 'page__desc',
                    text: '1 - 10 millió Ft szabad felhasználású kölcsön, maximum 20 éves futamidőre, melynek törlesztőrészlete nem haladhatja meg az 50.000 Ft-ot. 45.900 Ft törlesztőrészlet mellé 4.167 Ft állami kezességvállalási díj.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Kik igényelhetik a babaváró hitelt?'
                },
                icon: 'manage_accounts',
                list: [
                    'Házaspárok, akik mindketten elmúltak 18. évesek, de a feleség még nem töltötte be a 41. életévét',
                    'Legalább a házaspár egyik tagjának van 3 év folyamatos társadalombiztosítási jogviszonya (TB)',
                    'Mindketten rendelkeznek magyarországi lakcímmel',
                    'Büntetlen előéletű a pár mindkét tagja',
                    'Egyiküknek sincs a NAV-nál nyilvántartott köztartozása',
                    'Egyikük sem szerepel a KHR rendszerben (régi nevén BAR lista) meg nem fizetett adósság, vagy bankkártyás visszaélés miatt. (Passzív BAR lista egyes esetekben elfogadható)'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Külföldön élők, külföldi jövedelem'
                },
                icon: 'savings',
                desc: {
                    class: 'page__desc',
                    text: 'A kérelem benyújtását megelőző 180 napban kizárólag magyar TB jogviszony vehető figyelembe, valamint az igénylőnek érvényes magyarországi lakcímmel kell rendelkeznie. A Babaváró hitelhez szükséges jövedelem akár külföldi jövedelem is lehet.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Gyermekszületés esetén'
                },
                icon: 'family_restroom',
                list: [
                    '1 gyermek: amennyiben gyermek születik az első 5 évben, akkor a hitel a futamidő végéig kamatmentes lesz, a havi törlesztést pedig 3 évre fel lehet függeszteni', 
                    '2 gyermek: a második gyermek születését követően újabb három évig szüneteltethető a törlesztés, valamint elengedik a fennálló tőketartozás 30%-át',
                    '3 gyermek: a fennálló teljes tőketartozást elengedik, vagyis megszűnik a hitel'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Ha nem születik gyermek'
                },
                icon: 'no_accounts',
                desc: {
                    class: 'page__desc',
                    text: 'Ha nem születik gyermek a folyósítást követő 5 évig, akkor az igénybe vett kamattámogatást egy összegben vissza kell fizetni, a hitel pedig piaci kamatozású személyi kölcsönné alakul át. Ha a gyermekvállalás egészségügyi okok vagy megváltozott munkaképesség miatt nem valósul meg, akkor a kamattámogatás megszűnése és visszafizetése alól az illetékes járási hivatal méltányossági felmentést adhat.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Válás esetén'
                },
                icon: 'social_distance',
                desc: {
                    class: 'page__desc',
                    text: 'Ha nem született gyermek az első 5 évben, akkor az igénybe vett kamattámogatást 120 napon belül egy összegben vissza kell fizetni, a hitel pedig piaci kamatozású lesz. Amennyiben született gyermek, akkor a támogatást nem kell visszafizetni, viszont a továbbiakban piaci kamatozású lesz a hitel. Ha a válást követően egyikük újraházasodik (és az előző házasságból nem volt gyermeke), és megfelelnek az igénylés feltételeinek, akkor a gyermekvállalásra rendelkezésre álló 5 év újra kezdődik, a Babaváró kedvezményei pedig igénybe vehetők.'
                }
            },
        ]
    },
    {
        loanType: 'csok',
        link: '/csok',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'CSOK'
                },
                icon: 'csok',
                desc: {
                    class: 'page__desc',
                    text: 'A Családi Otthonteremtési Kedvezmény új lakás, lakóház építéséhez, új vagy használt lakás vagy ház vásárlásához, meglévő lakás vagy ház bővítéséhez, illetve preferált kistelepülésen lévő ingatlan vásárlására, korszerűsítésére, bővítésére használható államilag támogatott hitel.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Igényléshez szükséges dokumentumok'
                },
                icon: 'description',
                list: [
                    'Kártya formátumú jogosítvány vagy személyi igazolvány, lakcímkártya, adókártya',
                    'Utolsó 3 havi bankszámlakivonat',
                    'Munkáltatói igazolás banki formanyomtatványon',
                    'Legalább 180 napos TB jogviszony (OEP igazolás), ami kormányhivataltól, járási hivataltól igényelhető',
                    'Falusi CSOK esetén legalább 1 éves TB jogviszony szükséges',
                    'Vételi szándéknyilatkozat',
                    'Ingatlan alaprajz',
                    'Adás-vételi szerződés',
                    'Társasházi alapító okirat',
                    'Építési határozat, tervdokumentáció'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Mekkora összeg igényelhető és milyen futamidővel?'
                },
                icon: 'clock',
                desc: {
                    class: 'page__desc',
                    text: 'Maximum 15 millió Ft hitelösszeg, maximum 10 millió Ft vissza nem térítendő állami támogatás, ingatlan értékhatár nélkül, legfeljebb 25 éves futamidőre.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Leggyakoribb célok'
                },
                icon: 'explore',
                list: [
                    '2008. július 1-én vagy azt követően kiadott építési engedéllyel rendelkező új lakás/új lakóház építéséhez, vagy',
                    '2008. július 1-én vagy azt követően kiadott használatbavételi engedéllyel rendelkező új lakás/új lakóház vásárlásához, vagy',
                    'Használt lakás/lakóház vásárlásához, vagy',
                    'Meglévő lakás/lakóház bővítéséhez, vagy',
                    'Tetőtér-beépítésre'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Kik igényelhetik a CSOK hitelt?'
                },
                icon: 'manage_accounts',
                list: [
                    'Élettársak, házastársak, egyedülálló szülők vehetik igénybe',
                    'Vállalt gyermek után járó támogatást csak házaspárok igényelhetnek, amennyiben az igényléskor az egyik fél 40 év alatti', 
                    'Gyermeknek az igényléskor a szülőkkel egy háztartásban kell élnie, nem rendelkezhet önálló megélhetési jövedelemmel és nem töltheti be a 25. életévét',
                    'Büntetlen előéletű a pár mindkét tagja',
                    'Egyiküknek sincs a NAV-nál nyilvántartott köztartozása',
                    'Az igénylők legalább egyikének 180 napos, 10 millió Ft összegű CSOK esetén 2 éves TB jogviszonnyal kell rendelkeznie',
                    'Használt lakás vásárlásnál a vételár maximum 20%-kal haladhatja meg a bank által megállapított forgalmi értéket',
                    'Vásárlásnál maximum a vételár 10%-a fizethető készpénzben',
                    'Építés, bővítés esetén a teljes költségvetés 70%-áról számlát kell bemutatni, új lakás vásárlásánál a teljes vételárról'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Fontos információk'
                },
                icon: 'warning',
                list: [
                    'Eladó és vevő nem lehetnek közeli hozzátartozók',
                    'Az ingatlanban csak az igénylők szerezhetnek tulajdont (bővítés esetén az ingatlanban minimum 50% tulajdonrésszel kell rendelkeznie az igénylőnek)'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Milyen feltételeknek kell megfelelnie az ingatlannak?'
                },
                icon: 'assignment_turned_in',
                list: [
                    '12 m2-es szobával, fürdővel és WC-vel felszerelt',
                    'Rendelkezik közműves villamos energia szolgáltatással,',
                    'Rendelkezik egyedi fűtéssel',
                    'Amennyiben nem közműves a szennyvízelvezetés, akkor egyedileg megoldott, továbbá',
                    'Ha nincs közműves ivóvíz, akkor legalább ivóvíz minőségű vizet szolgáltató kút van'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Bővítés'
                },
                icon: 'construction',
                desc: {
                    class: 'page__desc',
                    text: 'Legalább egy lakószobával történő alapterület növelés, ideértve a tetőtér-beépítést is, valamint emelet-ráépítéssel vagy tetőtér-beépítéssel létrehozott lakás akkor, ha az emelet-ráépítés vagy tetőtér-beépítés révén nem jön létre két új, önálló albetétként nyilvántartott lakás.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Példák korszerűsítésre'
                },
                icon: 'roofing',
                list: [
                    'Víz-, csatorna-, elektromos-, gáz-közműszolgáltatás bevezetése, illetve belső hálózatának kiépítése',
                    'Fürdőhelyiség vagy WC létesítése olyan lakásban, amely nem rendelkezik ilyen helyiséggel',
                    'Központi fűtés kialakítása vagy cseréje, ideértve a megújuló energiaforrások alkalmazását is',
                    'Az épület szigetelése, ideértve a hő-, hang-, illetve vízszigetelési munkálatokat',
                    'A külső nyílászáró energiatakarékos nyílászáróra való cseréje',
                    'Tető cseréje, felújítása, szigetelése',
                    'Kémény építése, korszerűsítése',
                    'Belső tér felújítása, ideértve a belső burkolat cseréjét, a galériaépítést, a belső elektromos-, vízhálózat cseréjét, a fürdő-, WC-felújítást'
                ]
            },
        ]
    },
    {
        loanType: 'contact',
        link: '/kapcsolat',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'KAPCSOLAT'
                },
                icon: 'contact',
                desc: {
                    class: 'page__desc',
                    text: 'Örömmel segítünk, ha segítségre, tanácsra van szükséged. Az alábbi űrlap kitöltése után munkatársunk hamarosan felkeres egy megfelelő időpont egyeztetése céljából. Amennyiben közvetlenül szeretnél kapcsolatba lépni velünk, használd további elérhetőségeinket!'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Elérhetőségek'
                },
                icon: '',
                list: [
                    <div className='contact__list-item'><span className='contact__icon contact__icon--small contact__icon--clock'></span>H-P: 8:00-17:00</div>,
                    <div className='contact__list-item'><span className='contact__icon contact__icon--small contact__icon--location'></span>Budapest</div>,
                    <a className='contact__list-item' href='mailto:d.tary9@gmail.com'><span className='contact__icon contact__icon--small contact__icon--email'></span>d.tary9@gmail.com</a>,
                    <a className='contact__list-item' href='tel:+36303434708'><span className='contact__icon contact__icon--small page__icon--phone'></span>+36303434708</a>,
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Céginformáció'
                },
                icon: '',
                list: [
                    <div className='contact__list-item'><span className='contact__icon contact__icon--small contact__icon--balance'></span>Adószám: 56829051-1-41</div>,
                    <div className='contact__list-item'><span className='contact__icon contact__icon--small contact__icon--inventory2'></span>Cégjegyzékszám: 2345998715</div>,
                    <div className='contact__list-item'><span className='contact__icon contact__icon--small contact__icon--location'></span>Telephely: Jéggyár utca 13, 1134 Budapest</div>,
                    <div className='contact__list-item'><span className='contact__icon contact__icon--small page__icon--person'></span>Cégnév: Tary Dóra E.V.</div>,
                ]
            },
            // {
            //     header: {
            //         class: 'page__header',
            //         text: 'Közösségi média'
            //     },
            //     icon: '',
            //     desc: {
            //         class: 'page__desc',
            //         text: 'fb insta linkedin'
            //     }
            // },
            // {
            //     header: {
            //         class: 'page__header',
            //         text: 'Elektronikus névjegy'
            //     },
            //     icon: '',
            //     desc: {
            //         class: '',
            //         text: '+361234567'
            //     }
            // },
            {
                header: {
                    class: 'page__header',
                    text: 'Üzenetküldés'
                },
                icon: '',
                desc: {
                    class: '',
                    text: ''
                }
            },
        ]
    },
    {
        loanType: 'news',
        link: '/hirek',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'HÍREK'
                },
                icon: '',
                desc: {
                    class: 'page__desc',
                    text: 'Aktuális pénzügyi információk'
                }
            },
        ]
    },
    {
        loanType: 'about',
        link: '/rolunk',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'RÓLUNK'
                },
                icon: '',
                desc: {
                    class: 'page__desc',
                    text: 'Ismerj meg minket!'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: ''
                },
                icon: '',
                desc: {
                    class: 'page__desc',
                    text: 'Az oldal célja, hogy segítsen eligazodni a hitelek között. A hitelfelvétel előtt díjmentesen próbálunk segíteni a gördülékenyebb és kényelmesebb hitelügyintézesben, ami sokszor már online is lehetséges. Az igényfelméréstől a folyósításon át az adminisztrációig az egész folyamatban segítünk eligazodni, vagy pedig megcsináljuk helyetted! Különböző és egyedi kedvezményekkel tudjuk segíteni az ügyletet, pl. kamatkedvezmény, előtörlesztési lehetőség, stb.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: ''
                },
                icon: '',
                desc: {
                    class: 'page__desc',
                    text: 'A piac ajánlatait hasonlítjuk össze független szakértőként, ebből a legkedvezőbb ajánlatot mutatjuk be számodra, tájékoztatva az előnyeiről és hátrányairól, ez alapján segítünk a döntésben. Közérthető nyelvezeten magyarázzuk el, nincsenek bonyolult szövegek, apró betűs részek! A piacon lévő sokéves tapasztalat és kapcsolatok által könyebb és gördülékenyebb ügyintézésre számíthatsz. Számíthatsz a gyorsaságunkra és kedves, precíz ügyintézőink segítségére, akik naprakész információkkal rendelkeznek a folyamatos képzések által.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: ''
                },
                icon: '',
                desc: {
                    class: 'page__desc',
                    text: 'Rugalmasan tudjuk kezelni ügyeid, megtaláljuk a lehetőségeket, a megfelelő pénzintézetet. Szinte az összes bankkal kapcsolatban állunk így a tejes piacról tudunk válogatni, hogy kiválasszuk számodra a legmegfelelőbb ajánlatot. Nem csak a hitel kapcsán tudunk segítséget nyújtani, hanem az eközben felmerülő és hozzá kapcsolódó termékekben is,  pl. lakásbiztosítás, életbiztosítás, hitelfedezeti biztosítás, megtakarítás, lakástakarékpénztár, számlanyitás, ezáltal egy kézbe fogjuk pénzügyeidet, nem kell külön emberekkel tartanod a kapcsolatot! Folyamatosan tudsz hozzánk fordulni a felmerülő kérdésekkel, nem csak a hitel előtt, de utána is!'
                }
            },
        ]
    },
]