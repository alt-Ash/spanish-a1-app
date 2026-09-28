const UNITS = [
  {
    id: "greetings",
    title: "1. Greetings & Introductions",
    subtitle: "Saludos y presentaciones",
    grammar: [
      {
        title: "Greetings by time of day",
        body: "Hola works any time. Use Buenos días until midday, Buenas tardes in the afternoon/early evening, and Buenas noches at night or as a farewell."
      },
      {
        title: "Introducing yourself",
        body: "Me llamo... (My name is...) or Soy... (I am...). To ask someone's name informally: ¿Cómo te llamas? Formally: ¿Cómo se llama usted?"
      },
      {
        title: "Tú vs usted",
        body: "Tú is the informal 'you' (friends, family, peers). Usted is formal (strangers, elders, professional settings). Spain also uses vosotros/as for informal 'you all'."
      }
    ],
    vocab: [
      ["Hola", "Hello"],
      ["Adiós", "Goodbye"],
      ["Buenos días", "Good morning"],
      ["Buenas tardes", "Good afternoon"],
      ["Buenas noches", "Good night"],
      ["Por favor", "Please"],
      ["Gracias", "Thank you"],
      ["De nada", "You're welcome"],
      ["Perdón", "Sorry / Excuse me"],
      ["Me llamo...", "My name is..."],
      ["¿Cómo te llamas?", "What's your name? (informal)"],
      ["Mucho gusto", "Nice to meet you"],
      ["¿Qué tal?", "How's it going?"]
    ],
    quiz: [
      { q: "How do you say 'Good morning' in Spanish?", options: ["Buenas noches", "Buenos días", "Buenas tardes", "Buen tiempo"], answer: 1, explain: "Buenos días is used until roughly midday." },
      { q: "Which is the INFORMAL way to ask 'What's your name?'", options: ["¿Cómo se llama usted?", "¿Cómo te llamas?", "¿Qué tal usted?", "¿Quién es usted?"], answer: 1, explain: "Tú-form questions use 'te': ¿Cómo te llamas?" },
      { q: "Complete: 'Mucho ___.' (Nice to meet you)", options: ["bueno", "gusto", "favor", "gracias"], answer: 1, explain: "Mucho gusto is the fixed phrase for 'nice to meet you'." },
      { q: "What does 'Gracias' mean?", options: ["Please", "Sorry", "Thank you", "Goodbye"], answer: 2, explain: "Gracias = Thank you." },
      { q: "Which pronoun is the FORMAL singular 'you'?", options: ["tú", "vosotros", "usted", "nosotros"], answer: 2, explain: "Usted is used for formal or unfamiliar contexts." },
      { q: "Fill in: '___, me llamo Ana.'", options: ["Hola", "Adiós", "Perdón", "Nada"], answer: 0, explain: "Hola works as a greeting to open the introduction." },
      { q: "'De nada' is the typical reply to...", options: ["Perdón", "Gracias", "Adiós", "Hola"], answer: 1, explain: "De nada = You're welcome, said after Gracias." },
      { q: "Choose the correct farewell for 'See you later':", options: ["Hasta luego", "Buenas tardes", "Mucho gusto", "Por favor"], answer: 0, explain: "Hasta luego literally means 'until later'." }
    ]
  },
  {
    id: "gender-articles",
    title: "2. Nouns, Gender & Articles",
    subtitle: "Género y artículos",
    grammar: [
      {
        title: "Noun gender",
        body: "Every Spanish noun is masculine or feminine. Nouns ending in -o are usually masculine, and -a usually feminine — but there are exceptions like el día (day, masculine) and la mano (hand, feminine)."
      },
      {
        title: "Definite articles (the)",
        body: "el (masc. singular), la (fem. singular), los (masc. plural), las (fem. plural)."
      },
      {
        title: "Indefinite articles (a/an/some)",
        body: "un (masc. singular), una (fem. singular), unos (masc. plural), unas (fem. plural)."
      },
      {
        title: "Making nouns plural",
        body: "Add -s if the noun ends in a vowel (libro → libros); add -es if it ends in a consonant (profesor → profesores)."
      }
    ],
    vocab: [
      ["el libro", "the book"],
      ["la mesa", "the table"],
      ["el chico", "the boy"],
      ["la chica", "the girl"],
      ["el coche", "the car"],
      ["la casa", "the house"],
      ["el problema", "the problem (exception: masc.)"],
      ["la mano", "the hand (exception: fem.)"],
      ["un amigo", "a friend (m)"],
      ["una amiga", "a friend (f)"],
      ["los libros", "the books"],
      ["las casas", "the houses"]
    ],
    quiz: [
      { q: "Which article goes with 'libro' (book)?", options: ["la", "el", "los", "las"], answer: 1, explain: "Libro ends in -o and is masculine: el libro." },
      { q: "Which article goes with 'mesa' (table)?", options: ["el", "la", "los", "un"], answer: 1, explain: "Mesa ends in -a and is feminine: la mesa." },
      { q: "Plural of 'el chico' is:", options: ["el chicos", "los chicas", "los chicos", "las chicos"], answer: 2, explain: "Masculine plural article is 'los': los chicos." },
      { q: "'la mano' is an exception because it ends in -o but is:", options: ["masculine", "feminine", "neuter", "plural only"], answer: 1, explain: "La mano is feminine despite the -o ending." },
      { q: "Choose the correct indefinite article: '___ amigo' (a male friend)", options: ["un", "una", "unos", "unas"], answer: 0, explain: "Masculine singular indefinite article: un amigo." },
      { q: "Plural of 'una casa' is:", options: ["unos casas", "unas casas", "una casas", "unas casa"], answer: 1, explain: "Feminine plural indefinite article: unas casas." },
      { q: "'el problema' is masculine even though it ends in -a. True or false?", options: ["True", "False"], answer: 0, explain: "El problema, el día, el mapa are common masculine exceptions." },
      { q: "Which article is used for feminine PLURAL nouns?", options: ["los", "las", "el", "una"], answer: 1, explain: "Las is the feminine plural definite article." }
    ]
  },
  {
    id: "ser-estar",
    title: "3. Ser vs Estar",
    subtitle: "Los dos verbos 'ser'",
    grammar: [
      {
        title: "Ser — identity, origin, permanent traits",
        body: "Use ser for who/what something is: profession, nationality, characteristics, time. Soy, eres, es, somos, sois, son."
      },
      {
        title: "Estar — location and temporary states",
        body: "Use estar for where something is, and for feelings/conditions that can change. Estoy, estás, está, estamos, estáis, están."
      },
      {
        title: "Quick contrast",
        body: "Soy español (permanent identity) vs. Estoy cansado (temporary state). Location ALWAYS uses estar: Madrid está en España."
      }
    ],
    vocab: [
      ["ser", "to be (permanent)"],
      ["estar", "to be (temporary/location)"],
      ["cansado/a", "tired"],
      ["feliz", "happy"],
      ["alto/a", "tall"],
      ["de España", "from Spain"],
      ["aquí", "here"],
      ["allí", "there"],
      ["¿Dónde está...?", "Where is...?"],
      ["contento/a", "content / happy"]
    ],
    quiz: [
      { q: "'Yo ___ profesor.' (permanent profession)", options: ["soy", "estoy", "es", "está"], answer: 0, explain: "Profession uses ser: Yo soy profesor." },
      { q: "'Ella ___ cansada hoy.' (temporary state)", options: ["es", "está", "son", "están"], answer: 1, explain: "Temporary conditions use estar: Ella está cansada." },
      { q: "'Madrid ___ en España.' (location)", options: ["es", "está", "soy", "estoy"], answer: 1, explain: "Location always uses estar." },
      { q: "Conjugate 'estar' for 'nosotros':", options: ["somos", "estamos", "son", "están"], answer: 1, explain: "Nosotros estamos." },
      { q: "Conjugate 'ser' for 'tú':", options: ["estás", "eres", "es", "está"], answer: 1, explain: "Tú eres." },
      { q: "Which verb do you use to describe LOCATION?", options: ["ser", "estar", "tener", "hacer"], answer: 1, explain: "Estar is used for location." },
      { q: "'___ las tres.' (telling time)", options: ["Están", "Son", "Estás", "Es"], answer: 1, explain: "Telling time above 1 o'clock uses 'son': Son las tres." },
      { q: "'Ellos ___ altos.' (permanent physical trait)", options: ["están", "son", "es", "está"], answer: 1, explain: "Physical traits are permanent, so ser: Ellos son altos." }
    ]
  },
  {
    id: "regular-verbs",
    title: "4. Regular -AR / -ER / -IR Verbs",
    subtitle: "Presente de indicativo",
    grammar: [
      {
        title: "-AR verbs (hablar — to speak)",
        body: "hablo, hablas, habla, hablamos, habláis, hablan."
      },
      {
        title: "-ER verbs (comer — to eat)",
        body: "como, comes, come, comemos, coméis, comen."
      },
      {
        title: "-IR verbs (vivir — to live)",
        body: "vivo, vives, vive, vivimos, vivís, viven."
      }
    ],
    vocab: [
      ["hablar", "to speak"],
      ["comer", "to eat"],
      ["vivir", "to live"],
      ["trabajar", "to work"],
      ["estudiar", "to study"],
      ["beber", "to drink"],
      ["escribir", "to write"],
      ["abrir", "to open"],
      ["leer", "to read"],
      ["aprender", "to learn"]
    ],
    quiz: [
      { q: "'Yo ___ español.' (hablar)", options: ["habla", "hablas", "hablo", "hablamos"], answer: 2, explain: "Yo hablo — first person -AR ending is -o." },
      { q: "'Nosotros ___ en Madrid.' (vivir)", options: ["vivo", "vive", "vivimos", "viven"], answer: 2, explain: "Nosotros vivimos." },
      { q: "'Tú ___ mucho.' (comer)", options: ["come", "comes", "como", "comen"], answer: 1, explain: "Tú comes." },
      { q: "'Ella ___ una carta.' (escribir)", options: ["escribo", "escribes", "escribe", "escribimos"], answer: 2, explain: "Ella escribe." },
      { q: "'Ellos ___ en la oficina.' (trabajar)", options: ["trabaja", "trabajas", "trabajamos", "trabajan"], answer: 3, explain: "Ellos trabajan." },
      { q: "Which ending is used for 'vosotros' in -ER verbs?", options: ["-áis", "-éis", "-ís", "-en"], answer: 1, explain: "Vosotros coméis, bebéis, etc." },
      { q: "'Vosotros ___ café.' (beber)", options: ["bebéis", "bebemos", "beben", "bebes"], answer: 0, explain: "Vosotros bebéis." },
      { q: "'¿Qué ___ (tú)?' (estudiar)", options: ["estudio", "estudias", "estudia", "estudian"], answer: 1, explain: "¿Qué estudias?" }
    ]
  },
  {
    id: "irregular-verbs",
    title: "5. Key Irregular Verbs",
    subtitle: "Tener, ir, hacer, querer, poder",
    grammar: [
      {
        title: "tener (to have)",
        body: "tengo, tienes, tiene, tenemos, tenéis, tienen. Also used for age (tengo 20 años) and expressions like tener hambre/sed (to be hungry/thirsty)."
      },
      {
        title: "ir (to go)",
        body: "voy, vas, va, vamos, vais, van. 'ir + a + infinitive' expresses the near future: voy a comer (I'm going to eat)."
      },
      {
        title: "hacer, querer, poder",
        body: "hacer: hago, haces, hace, hacemos, hacéis, hacen. querer: quiero, quieres, quiere, queremos, queréis, quieren. poder: puedo, puedes, puede, podemos, podéis, pueden."
      }
    ],
    vocab: [
      ["tener", "to have"],
      ["ir", "to go"],
      ["hacer", "to do / make"],
      ["querer", "to want"],
      ["poder", "to be able to / can"],
      ["tener que + inf.", "to have to"],
      ["ir a + inf.", "going to (future)"],
      ["tengo hambre", "I'm hungry"],
      ["tengo sed", "I'm thirsty"],
      ["tengo ... años", "I am ... years old"]
    ],
    quiz: [
      { q: "'Yo ___ 25 años.' (tener)", options: ["tienes", "tengo", "tiene", "tenemos"], answer: 1, explain: "Yo tengo 25 años." },
      { q: "'¿Adónde ___ (tú)?' (ir)", options: ["voy", "va", "vas", "van"], answer: 2, explain: "¿Adónde vas?" },
      { q: "'Nosotros ___ la tarea.' (hacer)", options: ["hago", "hace", "hacemos", "hacen"], answer: 2, explain: "Nosotros hacemos." },
      { q: "'Ella ___ un café.' (querer)", options: ["quiero", "quieres", "quiere", "queremos"], answer: 2, explain: "Ella quiere." },
      { q: "'Yo no ___ venir hoy.' (poder)", options: ["puedo", "puedes", "puede", "podemos"], answer: 0, explain: "Yo no puedo venir hoy." },
      { q: "'Voy a' + infinitive expresses:", options: ["the past", "the near future", "a command", "a question"], answer: 1, explain: "Ir a + infinitive = near future (going to...)." },
      { q: "'Tengo hambre' means:", options: ["I'm tired", "I'm thirsty", "I'm hungry", "I'm happy"], answer: 2, explain: "Tener hambre = to be hungry." },
      { q: "'Ellos ___ al cine esta noche.' (ir)", options: ["va", "vamos", "van", "vas"], answer: 2, explain: "Ellos van al cine." }
    ]
  },
  {
    id: "numbers-time",
    title: "6. Numbers, Time & Dates",
    subtitle: "Números, la hora y las fechas",
    grammar: [
      {
        title: "Telling time",
        body: "¿Qué hora es? — Es la una (1:00, singular). Son las dos/tres... (2:00+, plural). Add y media (half past) or menos cuarto (quarter to)."
      },
      {
        title: "Days and months",
        body: "Days (lunes, martes, miércoles...) and months (enero, febrero...) are NOT capitalized in Spanish."
      },
      {
        title: "Dates",
        body: "Format: el + number + de + month, e.g. el 5 de mayo (May 5th)."
      }
    ],
    vocab: [
      ["uno, dos, tres...diez", "one, two, three...ten"],
      ["¿Qué hora es?", "What time is it?"],
      ["Es la una", "It's one o'clock"],
      ["Son las dos", "It's two o'clock"],
      ["y media", "half past"],
      ["menos cuarto", "quarter to"],
      ["lunes", "Monday"],
      ["hoy", "today"],
      ["mañana", "tomorrow / morning"],
      ["enero", "January"]
    ],
    quiz: [
      { q: "'Es la ___.' (1:00)", options: ["una", "uno", "dos", "primera"], answer: 0, explain: "Es la una — 'hora' is feminine, so 'una' agrees." },
      { q: "'___ las tres.' (3:00)", options: ["Es", "Son", "Está", "Estoy"], answer: 1, explain: "Plural hours use 'son': Son las tres." },
      { q: "What day comes after 'lunes'?", options: ["domingo", "miércoles", "martes", "jueves"], answer: 2, explain: "lunes → martes → miércoles..." },
      { q: "'y media' means:", options: ["quarter past", "half past", "quarter to", "on the dot"], answer: 1, explain: "Y media = half past the hour." },
      { q: "The number 7 in Spanish is:", options: ["seis", "siete", "ocho", "nueve"], answer: 1, explain: "7 = siete." },
      { q: "'menos cuarto' means:", options: ["quarter past", "half past", "quarter to", "five past"], answer: 2, explain: "Menos cuarto = quarter to the next hour." },
      { q: "'mañana' can mean 'tomorrow' and also:", options: ["yesterday", "morning", "night", "afternoon"], answer: 1, explain: "Mañana = tomorrow or morning, depending on context." },
      { q: "The first month of the year is:", options: ["enero", "febrero", "marzo", "abril"], answer: 0, explain: "Enero = January." }
    ]
  },
  {
    id: "questions-adjectives",
    title: "7. Question Words & Adjectives",
    subtitle: "Interrogativos y adjetivos",
    grammar: [
      {
        title: "Question words",
        body: "qué (what), quién (who), cómo (how), cuándo (when), dónde (where), por qué (why), cuánto/a (how much/many). All carry a written accent."
      },
      {
        title: "Adjective agreement",
        body: "Adjectives must match the noun's gender and number: alto/alta/altos/altas. Some, like 'grande' or 'feliz', don't change for gender."
      },
      {
        title: "Adjective position",
        body: "Descriptive adjectives usually come AFTER the noun: un chico alto (a tall boy), not 'un alto chico'."
      }
    ],
    vocab: [
      ["qué", "what"],
      ["quién", "who"],
      ["cómo", "how"],
      ["cuándo", "when"],
      ["dónde", "where"],
      ["por qué", "why"],
      ["cuánto/a", "how much"],
      ["alto/a", "tall"],
      ["bajo/a", "short"],
      ["grande", "big"],
      ["pequeño/a", "small"],
      ["bonito/a", "pretty"]
    ],
    quiz: [
      { q: "'¿___ te llamas?'", options: ["Qué", "Cómo", "Cuándo", "Cuánto"], answer: 1, explain: "¿Cómo te llamas? = What's your name (lit. how do you call yourself)." },
      { q: "'¿___ vives?' (where)", options: ["Dónde", "Cuándo", "Quién", "Qué"], answer: 0, explain: "¿Dónde vives? = Where do you live?" },
      { q: "Correct feminine plural of 'alto':", options: ["alta", "altos", "altas", "alto"], answer: 2, explain: "Feminine plural adds -as: altas." },
      { q: "Does 'grande' change for gender (masc/fem)?", options: ["Yes", "No"], answer: 1, explain: "Grande is invariable for gender: un chico grande / una chica grande." },
      { q: "'¿___ años tienes?'", options: ["Cuántos", "Cuándo", "Cómo", "Qué"], answer: 0, explain: "¿Cuántos años tienes? = How old are you?" },
      { q: "'¿___ es esto?' (what)", options: ["Quién", "Qué", "Cómo", "Dónde"], answer: 1, explain: "¿Qué es esto? = What is this?" },
      { q: "Descriptive adjectives usually go ___ the noun.", options: ["before", "after", "never with", "instead of"], answer: 1, explain: "E.g. un libro interesante, not un interesante libro." },
      { q: "'¿___ no vienes?' (why)", options: ["Por qué", "Porque", "Cuánto", "Cómo"], answer: 0, explain: "Por qué (two words, with accent) is used in questions." }
    ]
  },
  {
    id: "routine-gustar",
    title: "8. Daily Routine, Reflexives & Gustar",
    subtitle: "La rutina diaria y gustar",
    grammar: [
      {
        title: "Reflexive verbs",
        body: "Verbs like levantarse (to get up) use a reflexive pronoun: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan."
      },
      {
        title: "Common reflexives",
        body: "despertarse (to wake up), ducharse (to shower), vestirse (to get dressed), acostarse (to go to bed)."
      },
      {
        title: "Gustar construction",
        body: "Gustar works backwards from English: me gusta el café (literally 'coffee is pleasing to me'). Use gusta with singular nouns/infinitives, gustan with plural nouns."
      }
    ],
    vocab: [
      ["levantarse", "to get up"],
      ["ducharse", "to shower"],
      ["vestirse", "to get dressed"],
      ["acostarse", "to go to bed"],
      ["despertarse", "to wake up"],
      ["me gusta", "I like (singular)"],
      ["me gustan", "I like (plural)"],
      ["te gusta", "you like"],
      ["todos los días", "every day"],
      ["por la mañana", "in the morning"]
    ],
    quiz: [
      { q: "'Yo ___ a las siete.' (levantarse)", options: ["se levanta", "te levantas", "me levanto", "nos levantamos"], answer: 2, explain: "Yo me levanto — first person reflexive pronoun is 'me'." },
      { q: "'Ella ___ antes de desayunar.' (ducharse)", options: ["me ducho", "se ducha", "te duchas", "se duchan"], answer: 1, explain: "Ella se ducha." },
      { q: "'Me gusta' is used before a ___ noun.", options: ["plural", "singular", "masculine only", "feminine only"], answer: 1, explain: "Gusta agrees with a singular subject: me gusta el café." },
      { q: "'Me gustan' is used before a ___ noun.", options: ["singular", "plural", "proper", "reflexive"], answer: 1, explain: "Gustan agrees with a plural subject: me gustan las manzanas." },
      { q: "'___ el café.' (I like coffee)", options: ["Me gusta", "Me gustan", "Te gusta", "Le gustan"], answer: 0, explain: "Café is singular: Me gusta el café." },
      { q: "'___ las manzanas.' (I like apples)", options: ["Me gusta", "Me gustan", "Te gustan", "Le gusta"], answer: 1, explain: "Manzanas is plural: Me gustan las manzanas." },
      { q: "The reflexive pronoun for 'tú' is:", options: ["me", "se", "te", "nos"], answer: 2, explain: "Tú te levantas, te duchas, etc." },
      { q: "'todos los días' means:", options: ["some days", "every day", "every night", "on weekends"], answer: 1, explain: "Todos los días = every day." }
    ]
  }
];
