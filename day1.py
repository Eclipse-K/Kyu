print(3*4)
# 변수
burger = 3000
suger = 2000
sort = 2500

print(burger+suger+sort)

def hello(): #함수
    print("hello!")
    print("Welcome to Codeit")

hello()

def welcome(name): #파라미터
    print(name)
    print("안녕하세요.")

welcome("선생님")

def print_sum(a1, a2, a3): #여러개의 파라미터
    print(a1+a2-a3)

print_sum(35, 42, 50)


def get_square(m): #return은 뒤에 적힌 것을 실행 시켜주는 듯
    return m+m

print(get_square(4))
print(get_square(16)*get_square(45))




