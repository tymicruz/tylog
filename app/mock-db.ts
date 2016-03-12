import {Post} from "./post";
import {Comment} from "./comment";
import {User} from "./user";

export var POSTS: Post[] = [
    {
        "_id": 0,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At modo dixeras nihil in istis rebus esse, quod interesset. Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis. Nam haec ipsa mihi erunt in promptu, quae modo audivi, nec ante aggrediar, quam te ab istis, quos dicis, instructum videro. Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Quos quidem dies quem ad modum agatis et in quantam hominum facetorum urbanitatem incurratis, non diconihil opus est litibus-; Sed ego in hoc resisto;",
        "user": "talani",
        "likes": 4,
        "dislikes": 7,
        "title": "About the Money"
    },
    {
        "_id": 1,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Sed haec quidem liberius ab eo dicuntur et saepius. Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. Duo Reges: constructio interrete. Sed plane dicit quod intellegit. Mene ergo et Triarium dignos existimas, apud quos turpiter loquare? Quod vestri quidem vel optime disputant, nihil opus esse eum, qui philosophus futurus sit, scire litteras. Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Quam si explicavisset, non tam haesitaret. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Modo etiam paulum ad dexteram de via declinavi, ut ad Pericli sepulcrum accederem. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim.",
        "user": "talani",
        "likes": 4,
        "dislikes": 4,
        "title": "Title Post 1"
    },
    {
        "_id": 2,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam si propter voluptatem, quae est ista laus, quae possit e macello peti? Duo Reges: constructio interrete. Faceres tu quidem, Torquate, haec omnia; Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur. Ita multa dicunt, quae vix intellegam. Etenim nec iustitia nec amicitia esse omnino poterunt, nisi ipsae per se expetuntur. Hic quoque suus est de summoque bono dissentiens dici vere Peripateticus non potest. Quae enim dici Latine posse non arbitrabar, ea dicta sunt a te verbis aptis nec minus plane quam dicuntur a Graecis. Sic igitur in homine perfectio ista in eo potissimum, quod est optimum, id est in virtute, laudatur. Vide ne ista sint Manliana vestra aut maiora etiam, si imperes quod facere non possim. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Haec igitur Epicuri non probo, inquam.",
        "user": "tyler",
        "likes": 6,
        "dislikes": 4,
        "title": "Title Post 2"
    },
    {
        "_id": 3,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui enim existimabit posse se miserum esse beatus non erit. Deprehensus omnem poenam contemnet. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Naturales divitias dixit parabiles esse, quod parvo esset natura contenta. Aliis esse maiora, illud dubium, ad id, quod summum bonum dicitis, ecquaenam possit fieri accessio. At cum tuis cum disseras, multa sunt audienda etiam de obscenis voluptatibus, de quibus ab Epicuro saepissime dicitur. Nihil opus est exemplis hoc facere longius. Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Duo Reges: constructio interrete.",
        "user": "tyler",
        "likes": 8,
        "dislikes": 6,
        "title": "Title Post 3"
    },
    {
        "_id": 4,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Itaque homo in primis ingenuus et gravis, dignus illa familiaritate Scipionis et Laelii, Panaetius, cum ad Q. Nonne odio multos dignos putamus, qui quodam motu aut statu videntur naturae legem et modum contempsisse? Duo Reges: constructio interrete. Quamquam scripsit artem rhetoricam Cleanthes, Chrysippus etiam, sed sic, ut, si quis obmutescere concupierit, nihil aliud legere debeat.",
        "user": "tyler",
        "likes": 9,
        "dislikes": 9,
        "title": "Title Post 4"
    },
    {
        "_id": 5,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. An tu me de L. Quod etsi ingeniis magnis praediti quidam dicendi copiam sine ratione consequuntur, ars tamen est dux certior quam natura. Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus; Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum;",
        "user": "tyler",
        "likes": 7,
        "dislikes": 4,
        "title": "Title Post 5"
    },
    {
        "_id": 6,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum. Vide, ne magis, inquam, tuum fuerit, cum re idem tibi, quod mihi, videretur, non nova te rebus nomina inponere. Quibus natura iure responderit non esse verum aliunde finem beate vivendi, a se principia rei gerendae peti; Qui est in parvis malis. Curium putes loqui, interdum ita laudat, ut quid praeterea sit bonum neget se posse ne suspicari quidem. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem.",
        "user": "admin",
        "likes": 3,
        "dislikes": 3,
        "title": "Title Post 6"
    },
    {
        "_id": 7,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quaero igitur, quo modo hae tantae commendationes a natura profectae subito a sapientia relictae sint. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Duo Reges: constructio interrete. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Numquam hoc ita defendit Epicurus neque Metrodorus aut quisquam eorum, qui aut saperet aliquid aut ista didicisset. Similiter sensus, cum accessit ad naturam, tuetur illam quidem, sed etiam se tuetur; An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? Itaque ab his ordiamur. Ego autem existimo, si honestum esse aliquid ostendero, quod sit ipsum vi sua propter seque expetendum, iacere vestra omnia. At enim hic etiam dolore. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; Ait enim se, si uratur, Quam hoc suave! dicturum.",
        "user": "tyler",
        "likes": 7,
        "dislikes": 6,
        "title": "Title Post 7"
    },
    {
        "_id": 8,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Lucius: Mihi vero ista valde probata sunt, quod item fratri puto. Duo Reges: constructio interrete. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Mihi, inquam, qui te id ipsum rogavi? Quod ea non occurrentia fingunt, vincunt Aristonem; Item de contrariis, a quibus ad genera formasque generum venerunt. Quia nec honesto quic quam honestius nec turpi turpius. Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia. Quis est enim, qui hoc cadere in sapientem dicere audeat, ut, si fieri possit, virtutem in perpetuum abiciat, ut dolore omni liberetur? Quorum omnium quae sint notitiae, quae quidem significentur rerum vocabulis, quaeque cuiusque vis et natura sit mox videbimus.",
        "user": "talani",
        "likes": 9,
        "dislikes": 8,
        "title": "Title Post 8"
    },
    {
        "_id": 9,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cognitio autem haec est una nostri, ut vim corporis animique norimus sequamurque eam vitam, quae rebus iis ipsis perfruatur. Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Sed haec quidem liberius ab eo dicuntur et saepius. Duo Reges: constructio interrete. Satis est tibi in te, satis in legibus, satis in mediocribus amicitiis praesidii. Et si turpitudinem fugimus in statu et motu corporis, quid est cur pulchritudinem non sequamur? Atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est. In eo autem voluptas omnium Latine loquentium more ponitur, cum percipitur ea, quae sensum aliquem moveat, iucunditas. Ex rebus enim timiditas, non ex vocabulis nascitur. Quam nemo umquam voluptatem appellavit, appellat; Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Ait enim se, si uratur, Quam hoc suave! dicturum. Hanc in motu voluptatem -sic enim has suaves et quasi dulces voluptates appellat-interdum ita extenuat, ut M. Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus;",
        "user": "talani",
        "likes": 2,
        "dislikes": 4,
        "title": "Title Post 9"
    }
]

export var COMMENTS: Comment[] = [
    {
        "_id": 0,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin aliud quid voles, postea. Duo Reges: constructio interrete. Eaedem res maneant alio modo. Vide, quaeso, rectumne sit. Quid de Pythagora? Consequens enim est et post oritur, ut dixi.",
        "post": 1,
        "likes": 7,
        "dislikes": 5
    },
    {
        "_id": 1,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Efficiens dici potest. Sed fortuna fortis;",
        "post": 1,
        "likes": 7,
        "dislikes": 1
    },
    {
        "_id": 2,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contemnit enim disserendi elegantiam, confuse loquitur. Moriatur, inquit. Duo Reges: constructio interrete. Nihil enim hoc differt.",
        "post": 2,
        "likes": 0,
        "dislikes": 7
    },
    {
        "_id": 3,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in rebus apertissimis nimium longi sumus. Sed haec in pueris; Ut pulsi recurrant? Cum praesertim illa perdiscere ludus esset. Quonam, inquit, modo?",
        "post": 0,
        "likes": 0,
        "dislikes": 4
    },
    {
        "_id": 4,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum hoc idem saepe faciamus. Numquam facies. Immo alio genere; An haec ab eo non dicuntur? Quid sequatur, quid repugnet, vident. Nemo igitur esse beatus potest.",
        "post": 5,
        "likes": 5,
        "dislikes": 0
    },
    {
        "_id": 5,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tria genera bonorum; Sint modo partes vitae beatae. Neutrum vero, inquit ille. Erat enim Polemonis. Tubulo putas dicere? An tu me de L.",
        "post": 9,
        "likes": 6,
        "dislikes": 5
    },
    {
        "_id": 6,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inde igitur, inquit, ordiendum est. Sed ille, ut dixi, vitiose. Facile est hoc cernere in primis puerorum aetatulis. Duo Reges: constructio interrete. Quid censes in Latino fore?",
        "post": 6,
        "likes": 8,
        "dislikes": 0
    },
    {
        "_id": 7,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quonam, inquit, modo? Recte dicis; Bonum incolumis acies: misera caecitas. Zenonis est, inquam, hoc Stoici. Sed in rebus apertissimis nimium longi sumus. Duo Reges: constructio interrete.",
        "post": 1,
        "likes": 1,
        "dislikes": 2
    },
    {
        "_id": 8,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaedem res maneant alio modo. Quoniam, si dis placet, ab Epicuro loqui discimus.",
        "post": 0,
        "likes": 9,
        "dislikes": 3
    },
    {
        "_id": 9,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Immo alio genere; Sint modo partes vitae beatae. Cur id non ita fit? Quid ergo? De quibus cupio scire quid sentias. Id Sextilius factum negabat. Non potes, nisi retexueris illa.",
        "post": 2,
        "likes": 2,
        "dislikes": 7
    },
    {
        "_id": 10,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reguli reiciendam; Egone quaeris, inquit, quid sentiam? Age sane, inquam. Haec dicuntur fortasse ieiunius; Compensabatur, inquit, cum summis doloribus laetitia. Et quidem, inquit, vehementer errat;",
        "post": 7,
        "likes": 7,
        "dislikes": 5
    },
    {
        "_id": 11,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Poterat autem inpune; Duo enim genera quae erant, fecit tria. Duo Reges: constructio interrete. Ratio enim nostra consentit, pugnat oratio. At ille pellit, qui permulcet sensum voluptate.",
        "post": 6,
        "likes": 3,
        "dislikes": 5
    },
    {
        "_id": 12,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quid possumus facere melius? A mene tu? Sed ad illum redeo. Eam stabilem appellas. Quod totum contra est.",
        "post": 4,
        "likes": 1,
        "dislikes": 3
    },
    {
        "_id": 13,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Nos commodius agimus. Nunc agendum est subtilius. Qualem igitur hominem natura inchoavit? Duo Reges: constructio interrete. Videsne quam sit magna dissensio? Sed haec in pueris; Quis istum dolorem timet?",
        "post": 5,
        "likes": 1,
        "dislikes": 4
    },
    {
        "_id": 14,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihilo magis. Quam ob rem tandem, inquit, non satisfacit? At enim sequor utilitatem. Quae cum dixisset paulumque institisset, Quid est? Nulla erit controversia. Duo Reges: constructio interrete.",
        "post": 2,
        "likes": 9,
        "dislikes": 1
    },
    {
        "_id": 15,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum ille: Ain tandem? An haec ab eo non dicuntur? Respondent extrema primis, media utrisque, omnia omnibus. Sed ego in hoc resisto;",
        "post": 5,
        "likes": 7,
        "dislikes": 7
    },
    {
        "_id": 16,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stoici scilicet. Si longus, levis dictata sunt. Primum in nostrane potestate est, quid meminerimus? Scisse enim te quis coarguere possit? Sed fac ista esse non inportuna; Oratio me istius philosophi non offendit;",
        "post": 5,
        "likes": 6,
        "dislikes": 9
    },
    {
        "_id": 17,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non semper, inquam; Si id dicis, vicimus. Quis Aristidem non mortuum diligit? Poterat autem inpune; Duo Reges: constructio interrete. Quare attende, quaeso.",
        "post": 4,
        "likes": 8,
        "dislikes": 2
    },
    {
        "_id": 18,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Torquatus, is qui consul cum Cn. Nos cum te, M. Equidem e Cn.",
        "post": 8,
        "likes": 6,
        "dislikes": 7
    },
    {
        "_id": 19,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Refert tamen, quo modo. Quid est enim aliud esse versutum? Torquatus, is qui consul cum Cn. Deinde dolorem quem maximum?",
        "post": 0,
        "likes": 2,
        "dislikes": 2
    },
    {
        "_id": 20,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non laboro, inquit, de nomine. Quae cum essent dicta, discessimus. Inquit, dasne adolescenti veniam? Erat enim Polemonis. At enim sequor utilitatem. Sed nimis multa. Nunc haec primum fortasse audientis servire debemus. Duo Reges: constructio interrete.",
        "post": 0,
        "likes": 3,
        "dislikes": 1
    },
    {
        "_id": 21,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos commodius agimus. Nunc de hominis summo bono quaeritur; Immo videri fortasse. Duo Reges: constructio interrete.",
        "post": 2,
        "likes": 5,
        "dislikes": 7
    },
    {
        "_id": 22,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tria genera bonorum; At certe gravius. Negare non possum. Duo Reges: constructio interrete. Tum ille: Ain tandem?",
        "post": 5,
        "likes": 6,
        "dislikes": 7
    },
    {
        "_id": 23,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suo genere perveniant ad extremum; Non quam nostram quidem, inquit Pomponius iocans; Beatus sibi videtur esse moriens. Nihil illinc huc pervenit. Recte, inquit, intellegis. Tria genera bonorum;",
        "post": 2,
        "likes": 4,
        "dislikes": 5
    },
    {
        "_id": 24,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid de Pythagora? Si id dicis, vicimus. Quo modo autem philosophus loquitur? Cur iustitia laudatur?",
        "post": 0,
        "likes": 5,
        "dislikes": 2
    },
    {
        "_id": 25,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In schola desinis. Duo Reges: constructio interrete. Tubulo putas dicere? Proclivi currit oratio. Istic sum, inquit. Istic sum, inquit. Non risu potius quam oratione eiciendum?",
        "post": 5,
        "likes": 7,
        "dislikes": 2
    },
    {
        "_id": 26,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Equidem e Cn. Id est enim, de quo quaerimus. Praeclare hoc quidem. Duo Reges: constructio interrete. Non semper, inquam;",
        "post": 1,
        "likes": 8,
        "dislikes": 9
    },
    {
        "_id": 27,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc omni virtuti vitium contrario nomine opponitur. Beatus sibi videtur esse moriens. Duo Reges: constructio interrete. Certe non potest. Sin aliud quid voles, postea. Efficiens dici potest.",
        "post": 3,
        "likes": 9,
        "dislikes": 9
    },
    {
        "_id": 28,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Nam ante Aristippus, et ille melius. Videsne, ut haec concinant? Quid, de quo nulla dissensio est? Sequitur disserendi ratio cognitioque naturae;",
        "post": 2,
        "likes": 6,
        "dislikes": 8
    },
    {
        "_id": 29,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo autem philosophus loquitur? Si longus, levis. Sint ista Graecorum; Beatus sibi videtur esse moriens.",
        "post": 8,
        "likes": 0,
        "dislikes": 5
    },
    {
        "_id": 30,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mihi, inquam, qui te id ipsum rogavi? Tubulo putas dicere? Frater et T. Pauca mutat vel plura sane; Proclivi currit oratio. Haeret in salebra.",
        "post": 8,
        "likes": 3,
        "dislikes": 2
    },
    {
        "_id": 31,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non laboro, inquit, de nomine. Avaritiamne minuis?",
        "post": 9,
        "likes": 8,
        "dislikes": 1
    },
    {
        "_id": 32,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illud non continuo, ut aeque incontentae. Compensabatur, inquit, cum summis doloribus laetitia. Comprehensum, quod cognitum non habet? Age, inquies, ista parva sunt.",
        "post": 4,
        "likes": 1,
        "dislikes": 2
    },
    {
        "_id": 33,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum hoc idem saepe faciamus. Quis est tam dissimile homini. Sed hoc sane concedamus. Duo Reges: constructio interrete. Qui est in parvis malis. Eaedem res maneant alio modo.",
        "post": 1,
        "likes": 7,
        "dislikes": 9
    },
    {
        "_id": 34,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id aliis narrare gestiant? Tenent mordicus. Nam quid possumus facere melius? Illud non continuo, ut aeque incontentae. Si id dicis, vicimus. Duo Reges: constructio interrete. Hoc ipsum elegantius poni meliusque potuit. Scaevolam M.",
        "post": 4,
        "likes": 0,
        "dislikes": 7
    },
    {
        "_id": 35,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini vero, inquam; Est enim effectrix multarum et magnarum voluptatum. Duo Reges: constructio interrete.",
        "post": 0,
        "likes": 4,
        "dislikes": 9
    },
    {
        "_id": 36,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc loco tenere se Triarius non potuit. Quibusnam praeteritis? Haec dicuntur inconstantissime. Aufert enim sensus actionemque tollit omnem. Tria genera bonorum; Duo Reges: constructio interrete. Sed fortuna fortis;",
        "post": 6,
        "likes": 6,
        "dislikes": 6
    },
    {
        "_id": 37,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Restatis igitur vos; Duo Reges: constructio interrete. Ut aliquid scire se gaudeant? Sequitur disserendi ratio cognitioque naturae; Quod cum dixissent, ille contra. Quis est tam dissimile homini.",
        "post": 1,
        "likes": 6,
        "dislikes": 6
    },
    {
        "_id": 38,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quidem, inquit, vehementer errat; Haec dicuntur inconstantissime. Duo Reges: constructio interrete. Mihi, inquam, qui te id ipsum rogavi? Tu quidem reddes; Ita credo.",
        "post": 4,
        "likes": 7,
        "dislikes": 4
    },
    {
        "_id": 39,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Equidem, sed audistine modo de Carneade? Satis est ad hoc responsum. Duo Reges: constructio interrete. Bonum patria: miserum exilium.",
        "post": 8,
        "likes": 2,
        "dislikes": 3
    },
    {
        "_id": 40,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stoicos roga. Bonum integritas corporis: misera debilitas. Sed haec omittamus; Duo Reges: constructio interrete.",
        "post": 4,
        "likes": 9,
        "dislikes": 1
    },
    {
        "_id": 41,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Igitur ne dolorem quidem. Expectoque quid ad id, quod quaerebam, respondeas. Putabam equidem satis, inquit, me dixisse. Haec dicuntur inconstantissime. Cur id non ita fit? Multoque hoc melius nos veriusque quam Stoici. Quid sequatur, quid repugnet, vident. Utilitatis causa amicitia est quaesita.",
        "post": 4,
        "likes": 4,
        "dislikes": 9
    },
    {
        "_id": 42,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In schola desinis. Istam voluptatem, inquit, Epicurus ignorat? Igitur ne dolorem quidem. Restinguet citius, si ardentem acceperit. Inquit, dasne adolescenti veniam?",
        "post": 0,
        "likes": 9,
        "dislikes": 8
    },
    {
        "_id": 43,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaedem res maneant alio modo. Esse enim, nisi eris, non potes. Sedulo, inquam, faciam. Duo Reges: constructio interrete. Audeo dicere, inquit.",
        "post": 4,
        "likes": 1,
        "dislikes": 7
    },
    {
        "_id": 44,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hoc sane concedamus. Sed quot homines, tot sententiae; Quonam, inquit, modo? Duo Reges: constructio interrete. Erat enim Polemonis.",
        "post": 3,
        "likes": 4,
        "dislikes": 7
    },
    {
        "_id": 45,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod equidem non reprehendo; Sed tamen intellego quid velit. Quo tandem modo? Duo Reges: constructio interrete. A mene tu? Si longus, levis;",
        "post": 1,
        "likes": 3,
        "dislikes": 1
    },
    {
        "_id": 46,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque ab his ordiamur. Certe non potest. Quod iam a me expectare noli. Qui est in parvis malis.",
        "post": 8,
        "likes": 8,
        "dislikes": 7
    },
    {
        "_id": 47,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur iustitia laudatur? Quonam, inquit, modo?",
        "post": 6,
        "likes": 7,
        "dislikes": 8
    },
    {
        "_id": 48,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis enim redargueret? Respondeat totidem verbis. Quae ista amicitia est? Duo Reges: constructio interrete. Sed nimis multa. Ita prorsus, inquam; Certe, nisi voluptatem tanti aestimaretis.",
        "post": 3,
        "likes": 3,
        "dislikes": 2
    },
    {
        "_id": 49,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Disserendi artem nullam habuit. Collige omnia, quae soletis: Praesidium amicorum. Duo Reges: constructio interrete. Satis est ad hoc responsum.",
        "post": 3,
        "likes": 0,
        "dislikes": 1
    }
]

export var USERS: User[] = [
    {
        "_id": "admin",
        "password": "one"
    },
    {
        "_id": "tyler",
        "password": "two"
    },
    {
        "_id": "talani",
        "password": "three"
    }
]