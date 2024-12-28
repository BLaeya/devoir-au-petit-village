import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      name: 'Cétautomatix (Le forgeron)',
      description:
        "Plongez dans l'univers authentique du célèbre village gaulois avec **Cétautomatix**, le forgeron incontournable immortalisé sous forme de figurine artisanale. Fidèle à son personnage intemporel, cette figurine faite main capture à la perfection l’énergie et le charisme de ce gaulois musclé à la houppe blonde. Entre marteau et enclume, chaque détail minutieux reflète la force brute et la bienveillance de ce compagnon de saga. Symbole de tradition et de savoir-faire, **Cétautomatix**, connu pour son franc-parler et son amour du travail bien fait, trônera fièrement dans votre collection. Une véritable pièce de maître à offrir aux passionnés d’Astérix, ou à ajouter à votre trésor personnel pour replonger dans ce monde épique et intemporel.",
      price: 19.85,
      image: 'assets/images/cetautomatix.jpg',
    },
    {
      name: 'Agecanonix (Le doyen du village)',
      descrition:
        "Découvrez Agecanonix, le doyen du village, une figurine unique façonnée à la main avec une attention minutieuse pour les détails. Inspirée par l'univers emblématique d'Astérix et Obélix, cette pièce capture parfaitement la sagesse et le charme du personnage légendaire. Chaque trait, du visage ridé aux vêtements traditionnels gaulois, est réalisé avec un soin exceptionnel, rendant hommage à l'esprit indomptable du plus ancien des Gaulois. Un véritable trésor pour les collectionneurs et les amateurs de bande dessinée, Agecanonix ajoute une touche d'histoire et de tradition à votre collection. Chaque figurine est une œuvre d'art qui incarne l'essence intemporelle de ce personnage attachant, tout en apportant une touche de nostalgie à votre espace.",
      price: 19.85,
      image: 'assets/images/agecanonix.jpg',
    },
    {
      name: 'Ordralfabétix (Le poissonnier)',
      descritpion:
        'Découvrez **Ordralfabétix**, le poissonnier légendaire d’**Au petit village**, incarné dans une figurine artisanale minutieusement sculptée à la main. Inspirée de l’univers mythique d’*Astérix et Obélix*, cette pièce unique capture l’essence indomptable du charismatique poissonnier avec un réalisme saisissant. Chaque détail, de sa besace remplie de poissons à son expression querelleuse, est reproduit avec une finesse exceptionnelle. Peinte à la main avec des pigments vibrants, la figurine **Ordralfabétix** incarne à la perfection le caractère haut en couleur et comique de ce personnage culte. Ajoutez une touche de Gaulois à votre collection avec cette pièce d’exception, symbole d’un savoir-faire artisanal authentique et passionné.',
      price: 19.85,
      image: 'assets/images/ordralphabetix.jpg',
    },
    {
      name: 'Falbala (La belle Gauloise)',
      description:
        "Découvrez **Falbala, la belle Gauloise**, une somptueuse figurine faite main qui capture toute l'élégance et le charme intemporel de l'un des personnages les plus emblématiques de l'univers d'Astérix et Obélix. Sculptée avec une minutie exceptionnelle, chaque détail de la silhouette gracieuse de Falbala, de sa chevelure dorée à sa tenue traditionnelle gauloise, est magnifiquement reproduit pour plonger les passionnés dans l'atmosphère authentique et nostalgique de la célèbre bande dessinée. Que vous soyez un collectionneur aguerri ou un amoureux de la culture gauloise, cette pièce unique insufflera à votre espace un esprit à la fois héroïque et raffinée.",
      price: 19.85,
      image: 'assets/images/falbala.jpg',
    },
    {
      name: 'Assurancetourix le Barde',
      descrption:
        "Découvrez **Assurancetourix le Barde**, l’emblématique chanteur du village Gaulois, immortalisé par nos artisans dans une figurine unique et minutieusement sculptée à la main. Portant fièrement sa robe blanche et sa lyre, cette reproduction capture toute l’essence de ce personnage légendaire, aussi célèbre pour son talent de musicien… que son incapacité à l’exercer convenablement! Avec des détails finement travaillés, cette pièce est bien plus qu’une simple figurine. Elle est le reflet d’un savoir-faire artisanal unique, inspiré des aventures intemporelles d'**Astérix et Obélix**. Célébrez l'humour et l'authenticité des bandes dessinées qui ont marqué des générations en ajoutant **Assurancetourix le Barde** à votre collection. Attention, aucune potion magique ne corrigera ses fausses notes!",
      price: 19.85,
      image: 'assets/images/assurancetourix.jpg',
    },
    {
      name: 'Abraracourcix (Le chef du village)',
      description:
        "Découvrez Abraracourcix, le fier et charismatique chef du village gaulois ! Reproduite avec une minutie artisanale, cette figurine faite main capture à la perfection l’essence du leadership et l’autorité naturelle de ce personnage culte. Doté de sa moustache imposante, de son casque ailé et de sa cape majestueuse, Abraracourcix incarne la force, la tradition et l’esprit indomptable des Gaulois face à l'envahisseur romain. Chaque détail, des textures finement sculptées à la peinture appliquée soigneusement à la main, fait de cette pièce bien plus qu’une simple figurine : un véritable hommage à l’univers légendaire d’Astérix et Obélix. Affichant fièrement ses symboles de pouvoir, cette œuvre unique est un incontournable pour les collectionneurs et passionnés de la célèbre bande dessinée.",
      price: 24.89,
      image: 'assets/images/abraracourcix.jpg',
    },
    {
      name: 'Panoramix le Druide',
      description:
        "Découvrez *Panoramix le Druide*, l'une des créations phares d'**Au petit village**, inspirée de la célèbre bande dessinée Astérix et Obélix. Entièrement façonnée à la main, cette figurine unique capture toute la sagesse et le mystère du légendaire druide gaulois. Du secret de la potion magique à sa longue barbe blanche, chaque détail a été minutieusement pensé pour honorer l'univers d'Uderzo et Goscinny. Conçue avec des matériaux nobles et une grande expertise artisanale, cette pièce deviendra rapidement un incontournable pour tous les collectionneurs. Offrez-vous un morceau de légende galloise et laissez Panoramix veiller sur votre village miniature!",
      price: 29.99,
      image: 'assets/images/panoramix.jpg',
    },
    {
      name: 'Idéfix (Le fidèle compagnon)',
      description:
        "Plongez au cœur de l'univers mythique d'Astérix et Obélix avec notre figurine artisanale d'Idéfix, le fidèle compagnon à quatre pattes. Sculptée et peinte à la main avec une précision exceptionnelle, chaque détail incarne l'espièglerie et la loyauté de ce petit chien blanc au grand cœur. Que vous soyez un collectionneur passionné ou un amoureux de l'univers gaulois, cette création unique apportera une touche de nostalgie et de malice à votre décoration. Conçue avec amour dans notre atelier Au petit village, Idéfix trouvera sa place dans les foyers de tous ceux qui, comme lui, savent que l’amitié vaut bien plus que toutes les batailles.",
      price: 19.85,
      image: 'assets/images/idefix.jpg',
    },
    {
      name: 'Obélix et son Menhir',
      description:
        "Découvrez « **Obélix et son Menhir** », une figurine artisanale unique et entièrement façonnée à la main qui capture toute l'essence du personnage emblématique de la bande dessinée Astérix. Conçue avec une attention minutieuse aux détails, cette pièce met en scène Obélix avec son inséparable menhir, symbole de force, de courage et d'humour. Chaque nuance de couleurs, chaque courbe de son costume et chaque grain du menhir témoignent d'un savoir-faire exceptionnel. Que vous soyez un collectionneur passionné ou un fan inconditionnel de cet univers légendaire, cette création saura trouver une place spéciale chez vous. Plongez dans la nostalgie de vos aventures préférées avec cette tribute réalisée avec amour et originalité.",
      price: 29.99,
      image: 'assets/images/obelix.jpg',
    },
    {
      name: 'Astérix le Gaulois',
      description:
        "Découvrez **Astérix le Gaulois**, une figurine artisanale unique qui capture toute l'essence du plus célèbre des irréductibles Gaulois. Sculptée minutieusement à la main, cette pièce rend hommage au charisme et à l'audace du héros emblématique de la bande dessinée créée par Goscinny et Uderzo. Grâce à chaque détail soigné – du casque ailé à la fidèle gourde postée à sa ceinture – cette figurine est un véritable chef-d'œuvre pour les collectionneurs et les passionnés d'Astérix. Fabriquée avec des matériaux de qualité premium, elle évoque avec force l’esprit indompté et le courage légendaire de ce petit guerrier, prêt à déjouer les plans de César. Offrez-vous un morceau de la Gaule avec cette création exceptionnelle, idéale pour enrichir votre collection ou pour faire un cadeau qui transportera tout amateur dans le monde d’Astérix et Obélix !",
      price: 29.99,
      image: 'assets/images/asterix.jpg',
    },
  ];
  constructor() {}
}
