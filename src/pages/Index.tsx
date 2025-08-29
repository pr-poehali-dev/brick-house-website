import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0
  });
  
  const [calcData, setCalcData] = useState({
    area: '',
    floors: '',
    type: ''
  });
  
  const [estimatedCost, setEstimatedCost] = useState(0);

  useEffect(() => {
    const animateCounters = () => {
      const targets = { experience: 15, projects: 120, clients: 95 };
      const duration = 2000;
      const increment = 50;
      
      Object.keys(targets).forEach(key => {
        let current = 0;
        const target = targets[key as keyof typeof targets];
        const step = target / (duration / increment);
        
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, increment);
      });
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);
    
    return () => observer.disconnect();
  }, []);
  
  const calculateCost = () => {
    if (!calcData.area || !calcData.floors || !calcData.type) return;
    
    const basePrice = {
      'economy': 25000,
      'standard': 35000,
      'premium': 50000
    };
    
    const floorMultiplier = calcData.floors === '2' ? 1.3 : 1;
    const cost = parseInt(calcData.area) * basePrice[calcData.type as keyof typeof basePrice] * floorMultiplier;
    
    setEstimatedCost(cost);
  };

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

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Calendar" size={32} className="text-white" />
              </div>
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                {counters.experience}+
              </div>
              <p className="text-gray-600 font-semibold">Лет опыта</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Home" size={32} className="text-white" />
              </div>
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                {counters.projects}+
              </div>
              <p className="text-gray-600 font-semibold">Домов построено</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                {counters.clients}%
              </div>
              <p className="text-gray-600 font-semibold">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-accent">
            Наши Работы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/img/3e77469a-90ac-42b8-93a5-b3eaecb73903.jpg" 
                alt="Современный кирпичный дом" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="font-heading text-xl font-bold mb-2">Современный Дом</h4>
                  <p className="text-sm">250 м² • 2 этажа</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/img/558bcccd-08c8-4b31-a782-691d99ef754c.jpg" 
                alt="Вилла с бассейном" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="font-heading text-xl font-bold mb-2">Премиум Вилла</h4>
                  <p className="text-sm">400 м² • Бассейн</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/img/d31753cd-e6b6-48d7-84a0-2ff6d23a2e34.jpg" 
                alt="Таунхаус" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="font-heading text-xl font-bold mb-2">Элегантный Таунхаус</h4>
                  <p className="text-sm">180 м² • Современный дизайн</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-accent">
              Рассчитать Стоимость
            </h2>
            <p className="text-gray-600 text-lg">
              Получите предварительную оценку стоимости строительства вашего дома
            </p>
          </div>
          
          <Card className="max-w-xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-center">Калькулятор стоимости</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="area" className="font-semibold">Площадь дома (м²)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Например, 150"
                  value={calcData.area}
                  onChange={(e) => setCalcData(prev => ({ ...prev, area: e.target.value }))}
                  className="text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="floors" className="font-semibold">Количество этажей</Label>
                <Select value={calcData.floors} onValueChange={(value) => setCalcData(prev => ({ ...prev, floors: value }))}>
                  <SelectTrigger className="text-lg">
                    <SelectValue placeholder="Выберите количество этажей" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 этаж</SelectItem>
                    <SelectItem value="2">2 этажа</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type" className="font-semibold">Класс отделки</Label>
                <Select value={calcData.type} onValueChange={(value) => setCalcData(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger className="text-lg">
                    <SelectValue placeholder="Выберите класс отделки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Эконом (25 000 ₽/м²)</SelectItem>
                    <SelectItem value="standard">Стандарт (35 000 ₽/м²)</SelectItem>
                    <SelectItem value="premium">Премиум (50 000 ₽/м²)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={calculateCost}
                className="w-full text-lg py-3 font-semibold"
                size="lg"
              >
                Рассчитать стоимость
              </Button>
              
              {estimatedCost > 0 && (
                <div className="text-center p-6 bg-primary/10 rounded-lg animate-scale-in">
                  <p className="text-lg mb-2 text-gray-600">Предварительная стоимость:</p>
                  <div className="font-heading text-3xl font-bold text-primary mb-4">
                    {estimatedCost.toLocaleString()} ₽
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    *Точная стоимость определяется после выезда специалиста
                  </p>
                  <Button onClick={handleWhatsAppClick} className="w-full">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Получить точный расчет
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
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