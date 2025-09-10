import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  User,
  Star,
  Calendar,
  DollarSign,
  Activity,
  Clock
} from 'lucide-react';

const AdminPersonals = () => {
  // Mock data - would come from API
  const trainers = [
    {
      id: '1',
      name: 'Carlos Silva',
      email: 'carlos.silva@email.com',
      phone: '+55 (61) 99999-1111',
      specialties: ['Beach Tennis', 'FTV', 'Condicionamento Físico'],
      pricePerSession: 120.00,
      rating: 4.8,
      totalSessions: 45,
      activeClients: 12,
      nextSession: '2024-01-28 16:00',
      status: 'active',
      monthlyRevenue: 5400.00
    },
    {
      id: '2',
      name: 'Ana Santos',
      email: 'ana.santos@email.com',
      phone: '+55 (61) 99999-2222',
      specialties: ['FTV', 'Futsal', 'Preparação Física'],
      pricePerSession: 100.00,
      rating: 4.9,
      totalSessions: 38,
      activeClients: 8,
      nextSession: '2024-01-29 18:00',
      status: 'active',
      monthlyRevenue: 3800.00
    },
    {
      id: '3',
      name: 'João Mendes',
      email: 'joao.mendes@email.com',
      phone: '+55 (61) 99999-3333',
      specialties: ['Beach Tennis', 'FTV', 'Aulas Kids'],
      pricePerSession: 80.00,
      rating: 4.7,
      totalSessions: 52,
      activeClients: 15,
      nextSession: '2024-01-30 14:00',
      status: 'active',
      monthlyRevenue: 4160.00
    },
    {
      id: '4',
      name: 'Maria Costa',
      email: 'maria.costa@email.com',
      phone: '+55 (61) 99999-4444',
      specialties: ['Beach Tennis', 'FTV'],
      pricePerSession: 140.00,
      rating: 4.6,
      totalSessions: 28,
      activeClients: 6,
      nextSession: null,
      status: 'inactive',
      monthlyRevenue: 0
    }
  ];

  const totalTrainers = trainers.length;
  const activeTrainers = trainers.filter(t => t.status === 'active').length;
  const totalRevenue = trainers.reduce((sum, t) => sum + t.monthlyRevenue, 0);
  const avgRating = trainers.filter(t => t.rating).reduce((sum, t) => sum + t.rating, 0) / trainers.filter(t => t.rating).length;

  return (
    <div className="min-h-screen bg-dashboard-bg text-dashboard-fg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Gestão de Personal Trainers</h1>
            <p className="text-white/80">Gerencie os personal trainers do FITWAY</p>
          </div>
          <Button className="bg-fitway-green hover:bg-fitway-green/90 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Novo Personal
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-dashboard-card border-dashboard-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-dashboard-fg">Total Trainers</CardTitle>
              <User className="h-4 w-4 text-fitway-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalTrainers}</div>
              <p className="text-xs text-white/70">{activeTrainers} ativos</p>
            </CardContent>
          </Card>

          <Card className="bg-dashboard-card border-dashboard-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-dashboard-fg">Receita Mensal</CardTitle>
              <DollarSign className="h-4 w-4 text-fitway-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                R$ {totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-white/70">personal training</p>
            </CardContent>
          </Card>

          <Card className="bg-dashboard-card border-dashboard-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-dashboard-fg">Avaliação Média</CardTitle>
              <Star className="h-4 w-4 text-fitway-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{avgRating.toFixed(1)}</div>
              <p className="text-xs text-white/70">⭐ satisfação</p>
            </CardContent>
          </Card>

          <Card className="bg-dashboard-card border-dashboard-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-dashboard-fg">Próxima Sessão</CardTitle>
              <Clock className="h-4 w-4 text-fitway-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">16:00</div>
              <p className="text-xs text-white/70">Carlos Silva</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-white/50" />
            <Input
              placeholder="Buscar personal trainers..."
              className="pl-10 bg-dashboard-card border-dashboard-border text-white placeholder:text-white/50"
            />
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="bg-dashboard-card border-dashboard-border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-fitway-green/20 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-fitway-green" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{trainer.name}</CardTitle>
                      <p className="text-white/60 text-sm">{trainer.email}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-white text-sm">{trainer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={trainer.status === 'active' ? 'default' : 'secondary'}
                      className={trainer.status === 'active' ? 'bg-fitway-green text-white' : ''}
                    >
                      {trainer.status === 'active' ? 'Ativo' : 'Inativo'}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-dashboard-border text-white hover:bg-dashboard-border">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-white/70 text-sm">Preço/sessão:</span>
                      <p className="text-white font-bold text-lg">
                        R$ {trainer.pricePerSession.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <span className="text-white/70 text-sm">Clientes ativos:</span>
                      <p className="text-white font-medium text-lg">{trainer.activeClients}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-white/70 text-sm">Total sessões:</span>
                      <p className="text-white font-medium">{trainer.totalSessions}</p>
                    </div>
                    <div>
                      <span className="text-white/70 text-sm">Receita mensal:</span>
                      <p className="text-fitway-green font-medium">
                        R$ {trainer.monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="text-white/70 text-sm block mb-2">Especialidades:</span>
                    <div className="flex flex-wrap gap-1">
                      {trainer.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-fitway-green/50 text-fitway-green">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-white/70 text-sm">Contato:</span>
                    <p className="text-white text-sm">{trainer.phone}</p>
                  </div>

                  {trainer.nextSession && (
                    <div className="pt-4 border-t border-dashboard-border">
                      <span className="text-white/70 text-sm">Próxima sessão:</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-fitway-green" />
                        <span className="text-white">
                          {new Date(trainer.nextSession).toLocaleDateString('pt-BR')} às{' '}
                          {new Date(trainer.nextSession).toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 border-fitway-green text-fitway-green hover:bg-fitway-green/10">
                      <Calendar className="mr-2 h-4 w-4" />
                      Agenda
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-dashboard-border text-white hover:bg-dashboard-border">
                      <Activity className="mr-2 h-4 w-4" />
                      Relatório
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPersonals;