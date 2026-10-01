
import './App.css'

//Components

//images
import events1 from './imgs/events1.png'
import events2 from './imgs/events2.jpg'
import events3 from './imgs/events3.jpg'

function App() {

  return (
    <>
      <main className="w-screen h-auto flex flex-col items-center">

        {/* Hero sectiom */}
        <section className="relative w-full min-h-[80vh] bg-[url('./imgs/heroSec1.jpeg')] bg-center bg-no-repeat bg-cover text-white flex flex-col items-center justify-center p-10 overflow-hidden">
  
  {/* Camada de Overlay Escura (Garante que a imagem fique escura o suficiente para ler o texto) */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  {/* Conteúdo da Hero (precisa do 'z-10' para ficar acima do overlay) */}
  <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-7xl">
    
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg/70 leading-tight">
      O Cenário Perfeito para sua <br className="hidden md:block"/> Grande Celebração
    </h1>
    
    <p className="text-lg md:text-xl w-full max-w-3xl text-shadow-md font-light opacity-95">
      Um espaço exclusivo que une elegância rústica, natureza exuberante e o acolhimento necessário para tornar seu evento inesquecível.
    </p>

    <a href="https://wa.me/5584988052100" target="_blank"  className="mt-4 px-10 py-5 text-lg rounded-full cursor-pointer bg-green-600 hover:bg-green-700 font-bold transition-all duration-300 shadow-lg hover:scale-105">
      Agendar uma Visita Exclusiva
    </a>
    
  </div>
</section>

        {/* Services */}
        <section className='w-full bg-white flex justify-center flex-col pt-5'>
          <h2 className='text-2xl text-center'>Nossos serviços</h2>
          <span className='text-center'>Cada momento importa</span>

          <div className="w-full flex flex-wrap justify-center p-5 gap-5">
  
  {/* Card 1 */}
  <div className="w-full sm:w-[48%] md:w-[30%] bg-gray-50 rounded-lg overflow-hidden shadow-md flex flex-col items-center pb-5">
    <img className="w-full h-48 sm:h-56 object-cover" src={events1} alt="Espaço de eventos" />
    <div className="w-full px-5 pt-4 flex flex-col text-center">
      <h3 className="self-center font-bold text-lg mb-2">Aluguel de espaço</h3>
      <span className="text-gray-600 text-sm">Espaço versátil</span>
      <span className="text-gray-600 text-sm">Mobiliário autêntico</span>
      <span className="text-gray-600 text-sm">Atendimento personalizado</span>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-[48%] md:w-[30%] bg-gray-50 rounded-lg overflow-hidden shadow-md flex flex-col items-center pb-5">
    <img className="w-full h-48 sm:h-56 object-cover" src={events2} alt="Evento 2" />
    <div className="w-full px-5 pt-4 flex flex-col text-center">
      <h3 className="self-center font-bold text-lg mb-2">Atendimento personalizado</h3>
      <span className="text-gray-600 text-sm">Atendimento prioritario</span>
      <span className="text-gray-600 text-sm">Alto nivel de preparo</span>
      <span className="text-gray-600 text-sm">Agilidade</span>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[48%] md:w-[30%] bg-gray-50 rounded-lg overflow-hidden shadow-md flex flex-col items-center pb-5">
    <img className="w-full h-48 sm:h-56 object-cover" src={events3} alt="Evento 3" />
    <div className="w-full px-5 pt-4 flex flex-col text-center">
      <h3 className="self-center font-bold text-lg mb-2">Buffet</h3>
      <span className="text-gray-600 text-sm">Elegância</span>
      <span className="text-gray-600 text-sm">Apresentação encantadora</span>
    </div>
  </div>

</div>
        </section>

        {/* About */}
        <section className="w-full py-16 px-5 bg-gray-50 flex flex-col items-center">
  <div className="max-w-4xl text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Por que escolher o nosso espaço?</h2>
    <p className="text-gray-600 text-base md:text-lg">Mais do que um lugar, o cenário ideal para transformar a sua celebração em memórias inesquecíveis.</p>
  </div>

  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Item 1 */}
    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold mb-4">01</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Versatilidade e Charme</h3>
      <p className="text-gray-600 text-sm">Um ambiente versátil que une estruturas rústicas e verde exuberante para receber seu evento com elegância natural.</p>
    </div>

    {/* Item 2 */}
    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold mb-4">02</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobiliário Autêntico</h3>
      <p className="text-gray-600 text-sm">Peças escolhidas a dedo que valorizam a estética e garantem beleza em cada canto e foto da sua celebração.</p>
    </div>

    {/* Item 3 */}
    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold mb-4">03</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Atendimento Dedicado</h3>
      <p className="text-gray-600 text-sm">Cuidamos de perto de cada detalhe para que o seu grande dia aconteça exatamente do jeito que você sonhou.</p>
    </div>

  </div>
</section>
        {/* Events */}

        <section className="w-full bg-gray-50 flex flex-col items-center py-16 px-5">
  <div className="max-w-3xl text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Presente em cada momento</h2>
    <p className="text-gray-600 text-lg">O que dizem quem já celebrou conosco</p>
  </div>

  {/* Container dos Cards de Depoimento */}
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Depoimento 1 */}
    <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between relative">
      <div>
        {/* Estrelas de Avaliação */}
        <div className="flex text-yellow-400 mb-4 text-lg">
          ★★★★★
        </div>
        <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
          "O espaço superou todas as nossas expectativas. A natureza ao redor combinada com o rústico elegante deixou nosso casamento impecável. Todos os convidados elogiaram!"
        </p>
      </div>
      <div className="flex items-center gap-4 border-t pt-4 border-gray-100">
        <div className="w-10 h-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold">
          K
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">Kethelin & João</h4>
          <span className="text-xs text-gray-500">Casamento</span>
        </div>
      </div>
    </div>

    {/* Depoimento 2 */}
    <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between relative">
      <div>
        <div className="flex text-yellow-400 mb-4 text-lg">
          ★★★★★
        </div>
        <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
          "Espaço versátil, lindo e muito aconchegante. A equipe deu todo o suporte necessário e o atendimento personalizado fez toda a diferença no nosso evento."
        </p>
      </div>
      <div className="flex items-center gap-4 border-t pt-4 border-gray-100">
        <div className="w-10 h-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold">
          M
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">Mariana Souza</h4>
          <span className="text-xs text-gray-500">Aniversário de 30 anos</span>
        </div>
      </div>
    </div>

    {/* Depoimento 3 */}
    <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between relative">
      <div>
        <div className="flex text-yellow-400 mb-4 text-lg">
          ★★★★★
        </div>
        <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
          "Lugar perfeito! O mobiliário autêntico e a iluminação à noite criam uma atmosfera mágica. Com certeza faremos mais comemorações aqui."
        </p>
      </div>
      <div className="flex items-center gap-4 border-t pt-4 border-gray-100">
        <div className="w-10 h-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold">
          C
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">Carlos Eduardo</h4>
          <span className="text-xs text-gray-500">Festa de Família</span>
        </div>
      </div>
    </div>

  </div>
</section>

        {/* Contact and location */}
        <section className="w-full bg-gray-100 flex flex-col items-center py-10 px-5">
  <div className="bg-white text-sm w-full md:w-8/12 md:text-base p-8 text-gray-800 flex flex-col items-center rounded-2xl shadow-md gap-6">
    
    {/* Título / Chamada */}
    <div className="text-center">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">Venha nos Conhecer</h3>
      <p className='text-sm opacity-60'>Entre em contato para saber mais e agendar sua visita!</p>
    </div>

    {/* Lista de Contatos */}
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-10 w-full pt-2 border-t border-gray-100">
      
      {/* WhatsApp */}
      <a 
        href="https://wa.me/5584988052100" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
      >
        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg">
          <i className="fa-brands fa-whatsapp"></i>
        </div>
        <span className="font-medium">(84) 98805-2100</span>
      </a>

      {/* Instagram */}
      <a 
        href="https://instagram.com/espacobackyard" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-colors"
      >
        <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-lg">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <span className="font-medium">@espacobackyard</span>
      </a>

    </div>

    {/* Endereço */}
    <div className="flex items-center gap-3 text-gray-600 text-center md:text-left pt-2 border-t border-gray-100 w-full justify-center">
      <i className="fa-solid fa-location-dot text-red-500 text-lg"></i>
      <span className="text-sm">Rua Camile Alves, 2023, Natal - RN, 59066-090</span>
    </div>

  </div>
</section>

        <footer className='w-full bg-gray-900 text-gray-300 h-16 flex justify-between px-6 md:px-12 items-center text-sm border-t border-gray-800'>
  
  {/* Nome / Marca */}
  <span className='font-medium tracking-wide text-white'>Espaço Backyard</span>
  
  {/* Redes Sociais / Contato com Links */}
  <div className="flex items-center gap-4 text-lg">
    <a 
      href="https://wa.me/5584988052100" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-green-400 transition-colors"
      title="WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>

    <a 
      href="https://instagram.com/espacobackyard" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-pink-400 transition-colors"
      title="Instagram"
    >
      <i className="fa-brands fa-instagram"></i>
    </a>

    <a 
      href="tel:84988052100" 
      className="hover:text-blue-400 transition-colors"
      title="Telefone"
    >
      <i className="fa-solid fa-phone"></i>
    </a>
  </div>

</footer>
      </main>
    </>
  )
}

export default App
