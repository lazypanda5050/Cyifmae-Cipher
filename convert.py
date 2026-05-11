class Convert:
    def __init__(self, text):
        self.orig = text
        self.qwerty =  "`1324567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>? "
        self.colemak = "`1234567890-=qwfpgjluy;[]\\arstdhneio'zxcvbkm,./~!@#$%^&*()_+QWFPGJLUY:{}|ARSTDHNEIO\"ZXCVBKM<>? "
        

    def encode(self):
        output = ""
        for char in self.orig:
            output.append(colemak[qwerty.find(char)])
        return output

    def decode(self):
        output = ""
        for char in self.orig:
            output.append(qwerty[colemak.find(char)])
        return output
