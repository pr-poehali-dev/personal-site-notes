const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto vintage-paper rounded-lg p-12 shadow-2xl">
        {/* Header with Logo */}
        <header className="text-center mb-12 border-b-2 border-pink-300 pb-8">
          <h1 className="text-6xl font-bold vintage-text mb-2 tracking-wider">
            НЕУЙМИНА ВЕРОНИКА
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-300 to-rose-400 mx-auto"></div>
        </header>

        {/* Navigation Links */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <a
            href="#friends"
            className="vintage-link text-center p-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors"
          >
            МОИ ДРУЗЬЯ
          </a>
          <a
            href="#birth"
            className="vintage-link text-center p-4 bg-rose-100 rounded-lg hover:bg-rose-200 transition-colors"
          >
            ДЕНЬ РОЖДЕНИЯ
          </a>
          <a
            href="#birthplace"
            className="vintage-link text-center p-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors"
          >
            МЕСТО РОЖДЕНИЯ
          </a>
          <a
            href="#gallery"
            className="vintage-link text-center p-4 bg-rose-100 rounded-lg hover:bg-rose-200 transition-colors"
          >
            ФОТОГАЛЕРЕЯ
          </a>
        </nav>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Personal Info Section */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="vintage-paper p-6 rounded-lg">
              <h2 className="text-2xl vintage-text mb-4 text-pink-800">
                ДАТА РОЖДЕНИЯ
              </h2>
              <p className="vintage-text text-lg">27.12.2008</p>
            </div>
            <div className="vintage-paper p-6 rounded-lg">
              <h2 className="text-2xl vintage-text mb-4 text-pink-800">
                МЕСТО РОЖДЕНИЯ
              </h2>
              <p className="vintage-text text-lg">СЕЛО КАМЫШЕВО</p>
              <div className="mt-4">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
                  alt="Село Камышево"
                  className="w-full h-32 object-cover rounded-lg border-2 border-pink-300"
                />
              </div>
            </div>
          </section>

          {/* Photo Gallery Section */}
          <section id="gallery" className="vintage-paper p-8 rounded-lg">
            <h2 className="text-3xl vintage-text mb-6 text-center text-pink-800">
              ФОТОГАЛЕРЕЯ
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="aspect-square bg-pink-200 rounded-lg border-2 border-pink-300 flex items-center justify-center hover:bg-pink-300 transition-colors"
                >
                  <span className="vintage-text text-pink-600">ФОТО {num}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Biography Section */}
          <section className="vintage-paper p-8 rounded-lg">
            <h2 className="text-3xl vintage-text mb-6 text-center text-pink-800">
              БИОГРАФИЯ
            </h2>
            <div className="space-y-4 vintage-text text-lg leading-relaxed">
              <p>
                ДОБРО ПОЖАЛОВАТЬ НА МОЮ ПЕРСОНАЛЬНУЮ СТРАНИЦУ! МЕНЯ ЗОВУТ
                ВЕРОНИКА НЕУЙМИНА, И ЗДЕСЬ ВЫ НАЙДЕТЕ ИНФОРМАЦИЮ О МОЕЙ ЖИЗНИ,
                УВЛЕЧЕНИЯХ И ДРУЗЬЯХ.
              </p>
              <p>
                Я РОДИЛАСЬ В ПРЕКРАСНОМ СЕЛЕ КАМЫШЕВО 27 ДЕКАБРЯ 2008 ГОДА. С
                ДЕТСТВА УВЛЕКАЮСЬ МНОГИМИ ИНТЕРЕСНЫМИ ВЕЩАМИ. МОЯ ЖИЗНЬ ПОЛНА
                ЯРКИХ МОМЕНТОВ И НЕЗАБЫВАЕМЫХ ВСТРЕЧ.
              </p>
              <p>
                У МЕНЯ ЕСТЬ ЗАМЕЧАТЕЛЬНЫЕ ДРУЗЬЯ - АНЯ, КИРИЛЛ И ИРА. НА ЭТОМ
                САЙТЕ ВЫ МОЖЕТЕ ПОЗНАКОМИТЬСЯ С НИМИ, ПОСМОТРЕТЬ ФОТОГРАФИИ И
                УЗНАТЬ БОЛЬШЕ О ТОМ, ЧТО МЕНЯ ВДОХНОВЛЯЕТ.
              </p>
            </div>
          </section>

          {/* Friends Section */}
          <section id="friends" className="vintage-paper p-8 rounded-lg">
            <h2 className="text-3xl vintage-text mb-6 text-center text-pink-800">
              МОИ ДРУЗЬЯ
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["АНЯ", "КИРИЛЛ", "ИРА"].map((name, index) => (
                <div
                  key={name}
                  className="text-center p-4 bg-pink-100 rounded-lg border border-pink-300"
                >
                  <div className="w-20 h-20 bg-pink-300 rounded-full mx-auto mb-3 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${index === 0 ? "1494790108755-2616da8c" : index === 1 ? "1507003211169-0a1dd7de" : "1438761681033-6461ffad8d"}?w=80&h=80&fit=crop&crop=face`}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="vintage-text text-pink-800 font-semibold">
                    {name}
                  </h3>
                  <p className="vintage-text text-sm text-pink-600 mt-2">
                    ЛУЧШИЙ ДРУГ
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t-2 border-pink-300">
          <p className="vintage-text text-pink-600">
            © 2024 • СОЗДАНО С ЛЮБОВЬЮ В ВИНТАЖНОМ СТИЛЕ
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
