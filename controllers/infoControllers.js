

const getHome = (req, res) => {
    res.status(200).render("home")
}

const getAbout = (req, res) => {
    res.status(200).render("all", {
        section: "About us!",
        paragraph1: "Somos una ONG creada hace 30 min, compuesta por dos miembros: Santi",
        img1: `img src="https://s2.abcstatics.com/media/espana/2016/08/17/titi-kjEH--620x349@abc.jpg" alt="gg"`,
        paragraph3: "Ismael",
        img2: `img src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/01/15/600179c42848b.r_d.603-326-11060.jpeg" alt="gg"`
    });
}

const getLocation = (req, res) => {
    res.status(200).render("all", {
        section: "Find us!",
        paragraph1: "No nos stalkees perr",
        paragraph2: "Quisque accumsan imperdiet diam, ac lobortis elit consectetur eu. Vestibulum nibh sapien, venenatis vel condimentum id, egestas scelerisque enim. Vestibulum fermentum felis augue, sed suscipit justo tincidunt vitae. Duis a commodo risus. Cras massa eros, posuere vel ex ac, tempus malesuada est. Ut vitae cursus tellus, sed imperdiet ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer porttitor diam sit amet pulvinar semper. Vestibulum ut tortor velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque purus nibh, tincidunt non semper vel, finibus vel augue. Aenean eleifend, ante imperdiet imperdiet rhoncus, arcu erat vulputate sapien, quis convallis lectus metus in libero. Vestibulum a lobortis nulla.",
        img1: `img src="https://ep01.epimg.net/verne/imagenes/2019/01/06/articulo/1546776114_202595_1546777101_noticia_normal.jpg" alt="gg"`,
        paragraph3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img2: `img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpcSpHGkJREzPxLYVvkzMRUmVv0EtMsh7IA&usqp=CAU" alt="gg"`
    });
}

const getMission = (req, res) => {
    res.status(200).render("all", {
        section: "Our Mission!",
        paragraph1: "",
        paragraph2: "Quisque accumsan imperdiet diam, ac lobortis elit consectetur eu. Vestibulum nibh sapien, venenatis vel condimentum id, egestas scelerisque enim. Vestibulum fermentum felis augue, sed suscipit justo tincidunt vitae. Duis a commodo risus. Cras massa eros, posuere vel ex ac, tempus malesuada est. Ut vitae cursus tellus, sed imperdiet ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer porttitor diam sit amet pulvinar semper. Vestibulum ut tortor velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque purus nibh, tincidunt non semper vel, finibus vel augue. Aenean eleifend, ante imperdiet imperdiet rhoncus, arcu erat vulputate sapien, quis convallis lectus metus in libero. Vestibulum a lobortis nulla.",
        img1: `img src="https://cdn.memegenerator.es/imagenes/memes/full/13/15/13152524.jpg" alt="gg"`,
        paragraph3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img2: `img src="prueba.jpg" alt="gg"`
    });
}

const getContact = (req, res) => {
    res.status(200).render("all", {
        section: "Contac us!",
        paragraph1: "",
        paragraph2: "Quisque accumsan imperdiet diam, ac lobortis elit consectetur eu. Vestibulum nibh sapien, venenatis vel condimentum id, egestas scelerisque enim. Vestibulum fermentum felis augue, sed suscipit justo tincidunt vitae. Duis a commodo risus. Cras massa eros, posuere vel ex ac, tempus malesuada est. Ut vitae cursus tellus, sed imperdiet ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer porttitor diam sit amet pulvinar semper. Vestibulum ut tortor velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque purus nibh, tincidunt non semper vel, finibus vel augue. Aenean eleifend, ante imperdiet imperdiet rhoncus, arcu erat vulputate sapien, quis convallis lectus metus in libero. Vestibulum a lobortis nulla.",
        img1: `img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwqYeXZg8skKcfHLfdvRfxuairApODEeuSQ&usqp=CAU" alt="gg"`,
        paragraph3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img2: `img src="https://images.freeimages.com/images/large-previews/714/gato-en-un-teclado-cat-on-a-keyboard-1241528.jpg" alt="gg"`
    });
}

module.exports = {
    getHome,
    getContact,
    getMission,
    getLocation,
    getAbout
}