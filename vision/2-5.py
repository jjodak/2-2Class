import cv2 as cv
import numpy as np
import sys

cap = cv.VideoCapture(0)

if not cap.isOpened():
    sys.exit("카메라 연결 실패")

frames = []
while True:
    ret, frame = cap.read()

    if not ret:
        print("프레임 획득에 실패하여 루프를 나갑니다.")
        break

    cv.imshow("Video display", frame)

    key = cv.waitKey(1)
    if key == ord("c"):
        frames.append(frame)
    elif key == ord("q"):
        break

cap.release()
cv.destroyAllWindows()

if len(frames) > 0:
    imgs = frames[0]
    for i in range(1, min(3, len(frames))):
        imgs = np.hstack((imgs, frames[i]))

    cv.imshow("20252365 ChoJunHyuk", imgs)

    cv.waitKey()
    cv.destroyAllWindows()

""" 과제 """
"""
창 이름을 자신의 학번 이름으로 지정 -> 캡처된 영상 과 코드 일부를 캡쳐하여 이미지로 eclass에 업로드
"""
