import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/79892606158", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+79892606158";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Строительство
              <br />
              <span className="text-white/90">Кирпичных Домов</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              Профессиональное строительство качественных кирпичных домов под ключ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Написать в WhatsApp
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Icon name="Phone" className="mr-2" size={24} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-accent">
            Наши Услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Hammer" size={32} className="text-white" />
                </div>
                <CardTitle className="font-heading text-xl font-bold">Строительство домов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Полный цикл строительства кирпичных домов от фундамента до крыши
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="FileText" size={32} className="text-white" />
                </div>
                <CardTitle className="font-heading text-xl font-bold">Проектирование</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Индивидуальные проекты домов с учетом всех ваших пожеланий
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Wrench" size={32} className="text-white" />
                </div>
                <CardTitle className="font-heading text-xl font-bold">Отделочные работы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Внутренняя и внешняя отделка, благоустройство территории
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-accent">
            Отзывы Клиентов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">Александр И.</CardTitle>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Отличная работа! Дом построили качественно и в срок. Рекомендую!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">Мария С.</CardTitle>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Профессиональный подход, качественные материалы. Очень довольны результатом!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">Дмитрий К.</CardTitle>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Надежная компания, честные цены. Построили дом мечты!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Свяжитесь с Нами
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Звоните или пишите в WhatsApp
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-lg">
              <Icon name="Phone" size={24} className="text-primary" />
              <span className="font-semibold">+7 (989) 260-61-58</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Icon name="MessageCircle" size={24} className="text-green-400" />
              <span className="font-semibold">WhatsApp</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Написать в WhatsApp
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Icon name="Phone" className="mr-2" size={24} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;