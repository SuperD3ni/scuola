class Console:
    def __init__(self, nome, lettore_disco):
        self.nome = nome
        self.lettore_disco = lettore_disco

    def __str__(self):
        return f"Console: {self.nome} {'con lettore disco' if self.lettore_disco else 'senza lettore disco'}"