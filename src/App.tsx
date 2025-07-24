import React, { useState } from 'react';
import { Heart, Calendar, MapPin, Phone, Mail, Upload, Play } from 'lucide-react';

function App() {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedVideo(file);
    }
  };

  const addToGoogleCalendar = () => {
    const event = {
      text: 'Matrimonio Irene & Stefano ',
      dates: '20260613T150000Z/20260613T230000Z',
      details: 'Celebrazione del matrimonio di Stefano e Irene presso Villa Ottone, Isola d\'Elba',
      location: 'Villa Ottone, Isola d\'Elba, Italia'
    };
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(url, '_blank');
  };

  const addToAppleCalendar = () => {
    const event = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://matrimonio-stefano-irene.com
DTSTART:20260613T150000Z
DTEND:20260613T230000Z
SUMMARY:Matrimonio Stefano & Irene
DESCRIPTION:Celebrazione del matrimonio di Stefano e Irene presso Villa Ottone, Isola d'Elba
LOCATION:Villa Ottone, Isola d'Elba, Italia
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([event], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'matrimonio-stefano-irene.ics';
    a.click();
  };

  return (
    <div className="min-h-screen bg-cream-50 relative overflow-hidden">
      {/* Artistic brush strokes background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-champagne-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-bl from-cream-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-champagne-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-cream-300/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
          style={{
            backgroundImage: 'url(/images/nuovo-sfondo-matrimonio.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-champagne-900/20 via-cream-900/30 to-champagne-900/40"></div>
        </div>
        
        <div className="relative z-20 text-center px-4">
          <div className="mb-8 animate-fade-in">
            <Heart className="w-16 h-16 mx-auto mb-6 text-champagne-200 drop-shadow-lg" />
          </div>
          <h1 className="text-7xl md:text-9xl font-pergamena font-light mb-6 tracking-wider drop-shadow-2xl">
            Irene <span className="text-champagne-200 font-normal">&</span> Stefano
          </h1>
          <p className="text-2xl md:text-3xl font-light tracking-widest opacity-95 drop-shadow-lg">
            13 Giugno 2026
          </p>
          <div className="mt-8">
            <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto"></div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-7 h-12 border-2 border-cream-100 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-cream-100 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* La nostra storia d'amore */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-cream-50 to-champagne-50 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-pergamena text-champagne-800 mb-8 tracking-wide">
              La nostra storia d'amore
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-10"></div>
            <p className="text-xl text-champagne-700 leading-relaxed max-w-4xl mx-auto font-light font-pergamena">
              Nel 2022, il nostro cammino si è incontrato e da quel momento non ci siamo più separati. 
              La nostra storia è fatta di momenti unici, risate condivise e sogni che stiamo costruendo insieme. 
              Ogni giorno ci arricchiamo l'uno dell'altra e ora siamo pronti a fare il passo più grande della 
              nostra vita: sposarci.
            </p>
          </div>
          
          {/* Photo gallery with improved layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main photo */}
            <div className="flex justify-center mb-12">
              <div className="relative w-full max-w-2xl">
                <img 
                  src="/images/La nostra storia amore (1).jpeg"
                  alt="Il nostro momento speciale"
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-cream-200 hover:shadow-3xl transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Showroom style horizontal scrolling gallery */}
            <div className="relative overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex space-x-6 w-max">
                <div className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-cream-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/La nostra storia amore (2).jpeg"
                    alt="Momento 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-cream-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/La nostra storia amore (3).jpeg"
                    alt="Momento 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-cream-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/La nostra storia amore (4).jpeg"
                    alt="Momento 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-cream-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/La nostra storia amore (5).jpeg"
                    alt="Momento 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-cream-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/La nostra storia amore (6).jpeg"
                    alt="Momento 5"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-cream-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/La nostra storia amore (7).jpeg"
                    alt="Momento 6"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-cream-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/La nostra storia amore (8).jpeg"
                    alt="Momento 7"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-cream-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="/images/La nostra storia amore (9).jpeg"
                    alt="Momento 8"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-cream-50 to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-cream-50 to-transparent pointer-events-none"></div>
            </div>
            <div className="text-center mt-4 text-champagne-600 text-sm italic">
              Scorri orizzontalmente per vedere tutte le foto
            </div>
          </div>
        </div>
      </section>

      {/* Il nostro video */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-champagne-50 to-cream-100 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-pergamena text-champagne-800 mb-8 tracking-wide">
            Il nostro video
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-10"></div>
          <p className="text-xl text-champagne-700 mb-12 leading-relaxed font-light font-pergamena">
            Un video che racconta la nostra storia, dai primi incontri a come ci siamo innamorati, 
            fino a questa decisione importante di sposarci. Un momento speciale per noi e da 
            condividere con chi ci vuole bene.
          </p>
          
          <div className="bg-gradient-to-br from-cream-100 to-champagne-100 border-2 border-dashed border-champagne-300 rounded-2xl p-16 hover:border-champagne-400 transition-all duration-300 shadow-inner">
            {[
                ]
                }
            {uploadedVideo ? (
              <div className="text-center">
                <Play className="w-20 h-20 mx-auto text-champagne-500 mb-6" />
                <p className="text-champagne-700 mb-6 text-lg">Video caricato: {uploadedVideo.name}</p>
                <button 
                  onClick={() => setUploadedVideo(null)}
                  className="text-champagne-600 hover:text-champagne-700 underline font-medium"
                >
                  Cambia video
                </button>
              </div>
            ) : (
              <div>
                <Upload className="w-20 h-20 mx-auto text-champagne-400 mb-6" />
                <p className="text-champagne-600 mb-6 text-lg">Carica il vostro video speciale</p>
                <label className="inline-block bg-gradient-to-r from-champagne-500 to-champagne-600 text-cream-50 px-10 py-4 rounded-full hover:from-champagne-600 hover:to-champagne-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Scegli video
                  <input 
                    type="file" 
                    accept="video/*" 
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Il nostro matrimonio */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-cream-100 to-champagne-50 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-pergamena text-champagne-800 mb-8 tracking-wide">
            Il nostro matrimonio
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-10"></div>
          <p className="text-xl text-champagne-700 mb-12 leading-relaxed font-light font-pergamena">
            Ci sposiamo con rito civile il <strong className="text-champagne-800 font-semibold">13 giugno 2026</strong>. Questo giorno segnerà l'inizio 
            di una nuova fase della nostra vita insieme, ufficializzando un amore che già ci accompagna 
            ogni giorno. Non vediamo l'ora di festeggiare con tutte le persone a noi care.
          </p>
          
          <div className="bg-gradient-to-br from-cream-50 to-champagne-100 rounded-3xl shadow-2xl p-12 mb-12 border border-champagne-200">
            <Calendar className="w-20 h-20 mx-auto text-champagne-500 mb-8" />
            <h3 className="text-4xl font-pergamena text-champagne-800 mb-6 tracking-wide">13 Giugno 2026</h3>
            <p className="text-champagne-600 mb-10 text-xl font-light font-pergamena">Rito Civile</p>
            
            <div className="text-center">
              <h4 className="text-2xl font-pergamena text-champagne-800 mb-8">Aggiungi al tuo calendario</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={addToGoogleCalendar}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  Google Calendar
                </button>
                <button 
                  onClick={addToAppleCalendar}
                  className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  Apple Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La location: Villa Ottone */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-champagne-50 to-cream-100 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-pergamena text-champagne-800 mb-8 tracking-wide">
              La location: Villa Ottone
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-10"></div>
            <p className="text-xl text-champagne-700 leading-relaxed max-w-4xl mx-auto mb-8 font-light font-pergamena">
              La nostra cerimonia e il ricevimento si terranno a Villa Ottone, sull'incantevole Isola d'Elba. 
              Un luogo dove natura e storia si incontrano, creando la cornice perfetta per il nostro giorno speciale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/villa ottone.jpeg"
                alt="Villa Ottone all'Isola d'Elba"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-cream-200"
              />
            </div>
            <div>
              <h3 className="text-3xl font-pergamena text-champagne-800 mb-6 tracking-wide">Un luogo magico</h3>
              <p className="text-champagne-700 mb-8 leading-relaxed text-lg font-light font-pergamena">
                Villa Ottone rappresenta il perfetto connubio tra eleganza e natura, situata in una 
                delle location più romantiche del Mediterraneo. Le sue terrazze vista mare e i 
                giardini curati nei minimi dettagli renderanno indimenticabile il nostro giorno speciale.
              </p>
              <a 
                href="https://maps.google.com/maps?q=Villa+Ottone+Isola+d'Elba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-champagne-800 text-cream-50 px-8 py-4 rounded-full hover:bg-champagne-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
              >
                <MapPin className="w-5 h-5" />
                Vedi su Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* L'amore è... */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
          style={{
            backgroundImage: 'url(/images/Hero section.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-champagne-900/20 via-cream-900/30 to-champagne-900/40"></div>
        </div>
        
        <div className="relative z-20 text-center px-4">
          <div className="mb-8 animate-fade-in">
            <Heart className="w-16 h-16 mx-auto mb-6 text-champagne-200 drop-shadow-lg" />
          </div>
          <h1 className="text-7xl md:text-9xl font-pergamena font-light mb-6 tracking-wider drop-shadow-2xl">
            Stefano <span className="text-champagne-200 font-normal">&</span> Irene
          </h1>
          <p className="text-2xl md:text-3xl font-light tracking-widest opacity-95 drop-shadow-lg">
            13 Giugno 2026
          </p>
          <div className="mt-8">
            <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto"></div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-7 h-12 border-2 border-cream-100 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-cream-100 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-cream-100 to-champagne-50 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-pergamena text-champagne-800 mb-8 tracking-wide">
            Contatti
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mb-10"></div>
          <p className="text-xl text-champagne-700 mb-12 leading-relaxed font-light font-pergamena">
            Se vuoi maggiori informazioni o semplicemente dirci quanto sei felice per noi, contattaci!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cream-50 to-champagne-100 rounded-3xl shadow-2xl p-10 border border-champagne-200">
              <h3 className="text-3xl font-pergamena text-champagne-800 mb-8 tracking-wide">Stefano</h3>
              <div className="space-y-4">
                <a 
                  href="tel:3477540951"
                  className="flex items-center justify-center gap-3 text-champagne-600 hover:text-champagne-700 transition-colors duration-300 text-lg font-pergamena"
                >
                  <Phone className="w-5 h-5" />
                  347 754 0951
                </a>
                <a 
                  href="mailto:stexjava@gmail.com"
                  className="flex items-center justify-center gap-3 text-champagne-600 hover:text-champagne-700 transition-colors duration-300 text-lg font-pergamena"
                >
                  <Mail className="w-5 h-5" />
                  stexjava@gmail.com
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cream-50 to-champagne-100 rounded-3xl shadow-2xl p-10 border border-champagne-200">
              <h3 className="text-3xl font-pergamena text-champagne-800 mb-8 tracking-wide">Irene</h3>
              <div className="space-y-4">
                <a 
                  href="tel:3490540973"
                  className="flex items-center justify-center gap-3 text-champagne-600 hover:text-champagne-700 transition-colors duration-300 text-lg font-pergamena"
                >
                  <Phone className="w-5 h-5" />
                  349 054 0973
                </a>
                <a 
                  href="mailto:dellarosairene94@gmail.com"
                  className="flex items-center justify-center gap-3 text-champagne-600 hover:text-champagne-700 transition-colors duration-300 text-lg font-pergamena"
                >
                  <Mail className="w-5 h-5" />
                  dellarosairene94@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-gradient-to-b from-champagne-800 to-champagne-900 text-cream-100 text-center z-10">
        <Heart className="w-10 h-10 mx-auto text-champagne-300 mb-6" />
        <p className="text-cream-200 text-xl font-light font-pergamena">
          Con amore, Stefano & Irene
        </p>
        <p className="text-champagne-300 text-lg mt-4 font-light font-pergamena">
          13 Giugno 2026 • Villa Ottone, Isola d'Elba
        </p>
      </footer>
    </div>
  );
}

export default App;
