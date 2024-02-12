# fromTo.py

def fromTo(a, b):
    cur = a

    def inner_function():
        nonlocal cur
        if cur > b:
            return "null"
        
        result = cur
        cur += 1
        return result

    return inner_function


def test_fromTo():
    range = fromTo(1, 3)
    assert range() == 1, "Test case 1 failed"
    assert range() == 2, "Test case 2 failed"
    assert range() == 3, "Test case 3 failed"
    assert range() == "null", "Test case 4 failed"


# Run the tests
test_fromTo()