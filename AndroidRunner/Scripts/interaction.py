# noinspection PyUnusedLocal
import subprocess
def main(device, *args, **kwargs):
    print('=INTERACTION=')
    print((device.id))
    print((device.current_activity()))
    subprocess.call("adb shell input tap 550 1500",shell=True)

