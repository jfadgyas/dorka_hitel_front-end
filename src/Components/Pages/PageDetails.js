export const PageDetails = [
    {
        loanType: 'personal',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'Személyi kölcsön'
                },
                icon: 'euro_symbol',
                desc: {
                    class: 'page__desc',
                    text: 'Szabad felhasználású kölcsön, ingatlanfedezet nélkül. Akár 10 millió Ft hitelösszeg. Egyszerűbb és gyorsabb igénylés, emiatt viszont a kamatok magasabbak lehetnek. 3-5 napon belül érkezik a számlára az összeg.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Igényléshez szükséges dokumentumok:'
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
                icon: 'schedule',
                desc: {
                    class: 'page__desc',
                    text: 'Maximum 10 millió Ft kölcsön, 1-8 éves futamidővel. JTM (jövedelemarányos törlesztési mutató) szabály: A havi törlesztő maximális összege 500 ezer Ft alatti nettó jövedelem esetén annak legfeljebb 50%-a lehet, 500 ezer Ft jövedelem felett annak 60%-a.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Termék jellemzők:'
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
                    text: 'Leggyakoribb célok:'
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
                    text: 'Elfogadható jövedelmek:'
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
                    text: 'Igényléshez szükséges dokumentumok:'
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
                    text: 'Hitelbírálati idő:'
                },
                icon: 'schedule',
                desc: {
                    class: 'page__desc',
                    text: 'Átlagosan 1-1,5 hónapot vesz igénybe a hitelügyintézés. Ha egyéb támogatások, kérelmek is társulnak hozzá, ez az idő hosszabb lehet.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Termék jellemzők:'
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
                    text: 'Leggyakoribb célok:'
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
                    text: 'Mekkora önerőre van szükség:'
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
                    text: 'Elfogadható jövedelmek:'
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
                    text: 'Elfogadható ingatlanfedezetek:'
                },
                icon: 'holiday_village',
                desc: {
                    text: 'Magyarország területen lévő, magánszemély tulajdonában álló, per-, teher- és igénymentes, önállóan forgalomképes ingatlan. Fontos a fedezetül szolgáló ingatlan becsült forgalmi értéke, mivel a hitelösszeg nem haladhatja meg ennek 80%-át. Kisebb településeken ez a szám alacsonyabb lehet, megközelítőleg 60-70%.'
                }
            },
        ]
    },
    {
        loanType: 'auto',
        details: []
    },
    {
        loanType: 'baby',
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'Babaváró hitel'
                },
                icon: 'child_care',
                desc: {
                    class: 'page__desc',
                    text: 'A babaváró hitel házasoknak szól, akik gyermeket terveznek. Maximálisan 10 millió Ft kamatmentes kölcsön, amely szabad felhasználású. Maximum 50.000 Ft havi törlesztőrészlet. A bankoknak 10 napjuk van a hiánytalanul benyújtott igénylés elbírálására, a folyósítást ezt követően gyorsan megtörténik.'
                }
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Igényléshez szükséges dokumentumok:'
                },
                icon: 'description',
                list: [
                    'Munkáltatói igazolás',
                    'Kártya formátumú jogosítvány vagy személyi igazolvány, lakcímkártya, adókártya',
                    'Utolsó 3 havi bankszámlakivonat',
                    '3 éves TB jogviszony (OEP igazolás), ami kormányhivataltól, járási hivataltól igényelhető',
                    'Házassági anyakönyvi kivonat'
                ]
            },
            {
                header: {
                    class: 'page__header',
                    text: 'Mekkora összeg igényelhető és milyen futamidővel?'
                },
                icon: 'schedule',
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
                    text: 'Külföldön élők, külföldi jövedelem:'
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
                    text: 'Gyermekszületés esetén:'
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
                    text: 'Ha nem születik gyermek:'
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
                    text: 'Válás esetén:'
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
        details: [
            {
                header: {
                    class: 'page__header',
                    text: 'Személyi kölcsön'
                },
                desc: {
                    class: 'page__desc',
                    text: 'Szabad felhasználású kölcsön, ingatlanfedezet nélkül. Akár 10 millió Ft hitelösszeg. Egyszerűbb és gyorsabb igénylés, emiatt viszont a kamatok magasabbak lehetnek. 3-5 napon belül érkezik a számlára az összeg.'
                }
            }
        ]
    },
]