from abc import ABC, abstractmethod
class DispositivoSmart(ABC):
    @abstractmethod
    def accendi(self):
        pass
    @abstractmethod
    def spegni(self):
        pass
    @abstractmethod
    def get_consumo(self):
        pass