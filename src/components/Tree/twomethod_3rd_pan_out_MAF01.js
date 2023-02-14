const newickString = `(WSSM	:0.01684,(H7L1	:0.02326,(((H7L30	:0.01299,SE-19	:0.02241):0.01255,
Y3551	:0.02725):0.00786,(R600	:0.03085,(((((FH838	:0.02301,
(MH63	:0.01054,R527	:0.00966):0.01104):0.00539,TG45	:0.02904):0.00836,
G630	:0.03289):0.00224,(((H7L26	:0.02182,PR106	:0.01838):0.00598,
(R498	:0.02515,S548	:0.02245):0.00632):0.00362,(J4115	:0.02279,
Y58S	:0.03211):0.01442):0.00387):0.00154,(((9311	:0.02756,
TG30	:0.03294):0.00542,(((((CN1	:0.02327,(DG	:0.01857,((FS32	:0.00997,
(G46	:0.00369,TG80	:0.00851):0.00853):0.00315,(II32	:0.00505,
ZS97	:0.00535):0.00905):0.00268):0.00727):0.00608,D62	:0.02434):0.00516,
((Gla4	:0.02635,(TG10	:0.02893,(TG21	:0.01604,TG24	:0.01546):0.00852):0.00415):0.00618,
TG75	:0.03531):0.00192):0.00377,TG84	:0.03609):0.00139,G8	:0.03415):0.00384):0.00047,
(((H7L32	:0.02404,TG82	:0.03206):0.00853,TG76	:0.03337):0.01232,
(((H7L33	:0.02488,(IR8	:0.01187,TG83	:0.01843):0.00912):0.00471,
(SE-3	:0.04003,SE-33	:0.04447):0.00656):0.00403,((((((((((((((((ARC10497	:0.02443,
(Sadri	:0.01689,TG81	:0.01731):0.01737):0.00290,(Basmati1	:0.01742,
Basmati334:0.01848):0.01313):0.00396,WW8	:0.03813):0.00382,
W2051	:0.02978):0.01948,W2036	:0.04978):0.01384,TG12	:0.05079):0.00375,
TG54	:0.05540):0.01248,W0639	:0.04834):0.00574,(((((((((((((((((((Azucena	:0.01338,
TG14	:0.01922):0.00153,(Lemont	:0.01044,TG65	:0.01666):0.00345):0.00347,
TG31	:0.02504):0.00056,(CGS	:0.01340,TG32	:0.01270):0.01166):0.00406,
GP117	:0.01767):0.00394,(((((DHX2	:0.01492,(GP523	:0.01557,
(((((((KY131	:0.00420,Kitaake	:0.00310):0.00163,Kosh	:0.00482):0.00056,
ZH11	:0.00504):0.00157,Suijing18	:0.00890):0.00152,TG22	:0.01427):0.00114,
TG19	:0.01754):0.00188,TG29	:0.01800):0.00340):0.00019):0.00080,
TG2	:0.02027):0.00269,(HP436	:0.00705,LJ	:0.01155):0.01192):0.00155,
GP680	:0.01639):0.00194,GP505	:0.01853):0.00073):0.00190,
TG15	:0.03276):0.00487,TG34	:0.03504):0.00246,TG46	:0.03346):0.00482,
(TG90	:0.03187,Zero02428	:0.02573):0.00820):0.00215,(((((((CHAOMEO	:0.01481,
TG63	:0.02139):0.00145,NamRoo	:0.01715):0.00331,TG17	:0.02506):0.00386,
TG3	:0.03028):0.00220,TG18	:0.03136):0.00307,TG4	:0.03142):0.01141,
KETANNANGK:0.03746):0.00303):0.00920,GP635	:0.03410):0.00909,
GP543	:0.03440):0.01518,((((((((((OryzaOffic:0.14078,((W2296	:0.02114,
W3101	:0.01556):0.02740,W3102	:0.03520):0.10597):0.00925,
W1952	:0.06616):0.07303,(((((W0133	:0.01713,(W0135	:0.01540,
(W0136	:0.00756,W0137	:0.00564):0.00810):0.00507):0.02592,
((W0573	:0.02999,W1809	:0.02751):0.00355,W1536	:0.02810):0.00449):0.01564,
(W1783	:0.03593,W2005	:0.03217):0.00841):0.01246,W0149	:0.05209):0.02579,
W1777	:0.06378):0.00516):0.00236,(((((W1725	:0.04396,(((((((W1943	:0.01937,
W3082	:0.01793):0.01147,W3096	:0.03003):0.00410,W3092	:0.03370):0.00160,
((W3037	:0.02366,W3038	:0.02774):0.00781,W3046	:0.03134):0.00489):0.00025,
W3074	:0.03535):0.00433,(W3000	:0.02209,(W3086	:0.00770,
W3088	:0.00770):0.02036):0.01750):0.00319,W3029	:0.04090):0.00711):0.00339,
(W3047	:0.04554,W3051	:0.04516):0.00735):0.00447,((W3012	:0.04321,
W3063	:0.04409):0.00554,W3066	:0.04616):0.00898):0.00525,
(W1976	:0.05659,W3007	:0.04591):0.01608):0.00101,W2275	:0.06067):0.00337):0.00246,
(W0143	:0.06536,(W0157	:0.06026,W1093	:0.06004):0.00304):0.00295):0.00122,
((((((((W0108	:0.05576,(W0600	:0.05177,W1236	:0.04613):0.00244):0.01036,
((((((W0169	:0.05267,W0171	:0.05553):0.00159,(W1890	:0.05152,
W2308	:0.05138):0.00454):0.00026,((W1552	:0.05438,W1859	:0.05422):0.00316,
W3090	:0.05374):0.00328):0.00073,W1919	:0.05717):0.00191,
(((W2022	:0.03547,W2197	:0.03633):0.02099,(W2318	:0.05410,
(W2320	:0.05206,W2321	:0.05304):0.00080):0.00058):0.00260,
W3054	:0.05451):0.00275):0.00095,((W0180	:0.05763,W1126	:0.05887):0.00121,
W0634	:0.05684):0.00305):0.00222):0.00184,(W0166	:0.04936,
W1895	:0.05504):0.00867):0.00149,(W1214	:0.03562,W2108	:0.03878):0.02797):0.00217,
W1550	:0.06105):0.00191,W1556	:0.06115):0.00242,W2267	:0.06268):0.00180,
W1880	:0.06370):0.00155):0.00431,(W1668	:0.06503,(W1748	:0.03222,
W1750	:0.03498):0.03292):0.00209):0.00127,W1559	:0.06698):0.00303,
W3071	:0.06083):0.00066,((W3009	:0.00679,W3055	:0.00661):0.04461,
(W3033	:0.05178,W3035	:0.05582):0.00267):0.00360):0.00301):0.00170,
W2066	:0.05844):0.00570,W1718	:0.04986):0.00363,W1719	:0.04352):0.00208,
W1839	:0.04679):0.00336,(((((((W0145	:0.05080,((W1557	:0.04070,
W1666	:0.03140):0.01384,W1737	:0.04076):0.01597):0.00304,
((W1292	:0.06116,W2283	:0.05484):0.00297,W2310	:0.06018):0.00324):0.00212,
(((W0234	:0.05334,(((W0594	:0.03502,W0596	:0.03678):0.00492,
W1553	:0.05283):0.00957,W1810	:0.05010):0.00652):0.00434,
W1970	:0.06021):0.00211,W1825	:0.05888):0.00161):0.00303,
W0590	:0.05492):0.00208,W0164	:0.06121):0.00466,((W1735	:0.04069,
W1742	:0.04271):0.00113,W1736	:0.05487):0.00590):0.00090,
((W2099	:0.01727,W3052	:0.02113):0.00789,W3040	:0.02941):0.03155):0.00104):0.00113):0.00302,
((((GP119	:0.00875,HP519	:0.01005):0.02297,W1723	:0.04583):0.00420,
W1080	:0.05322):0.00035,GP622	:0.04412):0.00474):0.00110,
((GP524	:0.04138,((GP58	:0.03116,W0103	:0.04264):0.00320,
((((((((((((N22	:0.00101,Nagina22	:0.00099):0.03405,TG60	:0.03935):0.00353,
TG6	:0.03997):0.00556,((NATELBORO	:0.01138,TG49	:0.01402):0.02435,
TG87	:0.03605):0.00786):0.00160,TG27	:0.05091):0.00805,(((TG62	:0.04110,
W2064	:0.02360):0.00413,W2053	:0.03262):0.00913,W1084	:0.03610):0.00461):0.00839,
(((W0107	:0.02506,W1731	:0.02534):0.00351,W0147	:0.02709):0.00556,
W1142	:0.03182):0.01659):0.00590,W1732	:0.05139):0.00454,
W1679	:0.05662):0.00356,(((W0627	:0.04008,((((W1547	:0.02340,
W1619	:0.02500):0.00332,W1865	:0.02773):0.00160,W1726	:0.03042):0.01167,
W1787	:0.03613):0.00412):0.00097,W0630	:0.04225):0.00600,
W2305	:0.04793):0.00877):0.00509,W2319	:0.05211):0.00479,
(W1107	:0.04791,W1677	:0.04189):0.00481):0.00343):0.00239):0.00103,
(((W0179	:0.02181,W2332	:0.02929):0.01923,W1117	:0.03137):0.00172,
(W0632	:0.03816,W2311	:0.05044):0.00601):0.00017):0.00199):0.00513,
(TG11	:0.07100,TG50	:0.06010):0.00451):0.00443,(((GOBOLSAIL	:0.03485,
((TG28	:0.03385,TM	:0.03895):0.00129,TG59	:0.03661):0.00253):0.00092,
((TG55	:0.04563,TG8	:0.04197):0.00302,TG58	:0.04193):0.00396):0.00138,
((HR12	:0.04435,TG9	:0.04335):0.00738,((LARHAMUGAD:0.03938,
TG53	:0.03882):0.00544,TG52	:0.03951):0.00169):0.00444):0.00460):0.00214,
((((((((KHAOYAIGUA:0.02736,TG16	:0.03544):0.00141,TG61	:0.03524):0.00259,
(TG43	:0.03267,TG56	:0.03393):0.00317):0.00211,(TG13	:0.03251,
TG33	:0.02969):0.00481):0.00187,TG5	:0.03911):0.00015,(TG64	:0.03878,
TG7	:0.03812):0.00227):0.00145,((LIMA	:0.02948,TG1	:0.03442):0.00611,
Tumba	:0.03484):0.00238):0.00169,((LIUXU	:0.03135,TG70	:0.03155):0.01038,
Tetep	:0.03912):0.00427):0.00332):0.00301,YX1	:0.03732):0.00027,
((((GP100	:0.03124,TG77	:0.02656):0.00397,TG42	:0.04008):0.00191,
TG51	:0.03524):0.00231,(((H7L27	:0.02778,(IR64	:0.00852,
SE-134	:0.01998):0.02412):0.00509,(H7L28	:0.03340,TG88	:0.04050):0.00288):0.00401,
((H7L31	:0.02455,(TG85	:0.00793,TG86	:0.00807):0.02070):0.00666,
TG78	:0.03642):0.00806):0.00148):0.00108):0.00016):0.00082):0.00021):0.00313):0.00362):0.00356):0.00558):0.01029,534M	:0.01466);`

export default newickString